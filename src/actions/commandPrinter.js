'use server'
import nodeHtmlToImage from 'node-html-to-image'
import { PrinterTypes, ThermalPrinter } from 'node-thermal-printer'
import fs from 'fs'
import groupBy from 'lodash/groupBy'

const commandPrinter = async (content, waiterInfo) => {
  try {
    const data = groupBy(content, 'areaName')

    const workAreas = Object.keys(data)
    const printerInfo = workAreas.map((workArea) => ({
      areaName: workArea,
      ip: data[workArea][0].ip,
      products: data[workArea],
    }))

    const body = await fs.readFileSync('./src/templates/commands.hbs', 'utf-8')

    await Promise.all(
      printerInfo.map(async (workarea, index) => {
        const pathName = `./printed-${workarea.areaName}-${index}.png`
        await nodeHtmlToImage({
          html: body,
          content: {
            ...workarea,
            waiter: waiterInfo,
          },
          output: pathName,
          type: 'png',
        })
        let printer = new ThermalPrinter({
          type: PrinterTypes.EPSON,
          interface: 'tcp://192.168.1.155:9100',
        })

        let isConnected = await printer.isPrinterConnected()

        if (isConnected) {
          printer.beep()
          await printer.printImage(pathName)
          printer.cut()

          printer.execute()
          console.log('printed!')
          fs.unlinkSync(pathName)
        }
      })
    )
  } catch (e) {
    console.log(e)
  }
}

export default commandPrinter
