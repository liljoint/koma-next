'use server'
import nodeHtmlToImage from 'node-html-to-image'
import { PrinterTypes, ThermalPrinter } from 'node-thermal-printer'
import fs from 'fs'

const detailPrinter = async (content) => {
  try {
    const body = await fs.readFileSync('./src/templates/detail.hbs', 'utf-8')
    const orderInfo = JSON.parse(content.get('content'))
    console.log(orderInfo)
    await nodeHtmlToImage({
      html: body,
      content: { ...orderInfo },
      output: './printed.png',
      handlebarsHelpers: {
        add: (a, b) => (a + b).toLocaleString('es-CL'),
        format: (n) => n.toLocaleString('es-CL'),
        short: (s) => s.substring(0, 15),
      },
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

      printer.execute()
      console.log('printed!')
      fs.unlinkSync('./printed.png')
    }
  } catch (e) {
    console.log(e)
  }
}

export default detailPrinter
