"use server";
import escpos from "escpos";
import network from "escpos-network";
import nodeHtmlToImage from "node-html-to-image";
const posPrinter = async (content) => {
  console.log(content.get("content"));

  nodeHtmlToImage({
    output: "./image.png",
    html: content.get("content"),
  }).then(() => {
    console.log("The image was created successfully!");
    const networkDevice = new network("192.168.1.155", 9100);
    const networkPrinter = new escpos.Printer(networkDevice);
    console.log("!printed");
    networkDevice.open(function (error) {
      escpos.Image.load("image.png", (image) =>
        networkPrinter.image(image, "S24").then(() => {
          networkPrinter.newLine().newLine().newLine().newLine().cut().close();
        })
      );
    });
  });
};

export default posPrinter;
