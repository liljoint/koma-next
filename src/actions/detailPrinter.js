'use server'
import nodeHtmlToImage from 'node-html-to-image'
import { PrinterTypes, ThermalPrinter } from 'node-thermal-printer'
import fs from 'fs'

const detailPrinter = async (content) => {
  try {
    const body = await fs.readFileSync('./src/templates/detail.hbs', 'utf-8')

    await nodeHtmlToImage({
      html: body,
      content: content,
      output: './printed.png',
      handlebarsHelpers: {
        add: (a, b) => (Number(a) + Number(b)).toLocaleString('es-CL'),
        format: (n) => n.toLocaleString('es-CL'),
        short: (s) => s.substring(0, 20),
        now: (s) => {
          const date = new Date()
          return date.toLocaleString('es-CL')
        },
      },
      type: 'png',
      puppeteerArgs: {
        headless: 'shell',
        args: ['--no-sandbox'], // Path to the manually installed Chromium
      },
    })
    let printer = new ThermalPrinter({
      type: PrinterTypes.EPSON,
      interface: 'tcp://192.168.1.155:9100',
    })

    let isConnected = await printer.isPrinterConnected()

    if (isConnected) {
      printer.beep()
      await printer.printImage('./printed.png')
      printer.cut()

      printer.execute()
      console.log('printed!')
      fs.unlinkSync('./printed.png')
    }
  } catch (e) {
    console.log(e)
  }
}

export default detailPrinter
