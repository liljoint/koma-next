'use server'
import nodeHtmlToImage from 'node-html-to-image'
import { PrinterTypes, ThermalPrinter } from 'node-thermal-printer'
import fs from 'fs'

const posPrinter = async (content) => {
  await nodeHtmlToImage({
    html: content.get('content'),
    output: './printed.png',
    type: 'png',
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
    try {
      printer.execute()
      console.log('printed!')
      fs.unlinkSync('./printed.png')
    } catch (e) {
      console.log(e)
    }
  }
}

export default posPrinter
