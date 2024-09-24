export const productsTransform = (products) => {
  return products?.map((product) => productTransform(product))
}
export const productTransform = ({ id, attributes }) => {
  return {
    id: id,
    name: attributes.productName,
  }
}
export default productTransform
