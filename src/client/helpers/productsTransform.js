export const productsTransform = (products) => {
  return products?.map((product) => productTransform(product))
}
export const productTransform = ({ id, documentId, productName }) => {
  return {
    id: id,
    documentId,
    name: productName,
  }
}
export default productTransform
