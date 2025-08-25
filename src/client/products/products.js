import { strapiClient } from '@/client/strapiClient'
import { productsTransform } from '../helpers/productsTransform'

export const getAllProducts = async () => {
  const { data } = await strapiClient({
    path: '/api/products?pagination[limit]=1000',
    method: 'GET',
  })
  const transformedData = productsTransform(data)
  return transformedData
}
export const getActiveProducts = async (url) => {
  const { data } = await strapiClient({
    path: url,
    method: 'GET',
  })
  const transformedData = productsTransform(data)
  console.log(transformedData)
  return transformedData?.map((product) => ({
    value: product.id,
    label: product.name,
    ...product,
  }))
}

export default getAllProducts
