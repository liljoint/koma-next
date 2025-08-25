export const productsTransform = (products) => {
  return products?.map((product) => productTransform(product))
}
export const productTransform = ({ id, documentId, productName, workArea }) => {
  return {
    id: id,
    documentId,
    name: productName,
    workArea: {
      areaName: workArea.areaName,
      ip: workArea.areaPrinters?.ip,
    },
  }
}
export default productTransform
