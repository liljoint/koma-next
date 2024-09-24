
import { strapiClient } from '@/client/strapiClient'
import { productsTransform } from '../helpers/productsTransform'

export const getAllProducts = async () => {
  const { data } = await strapiClient({
    path: '/api/products?pagination[limit]=1000',
    method: 'GET',
  })
  const transformedData = productsTransform(data)
  console.log(transformedData)
  return transformedData
}
export const getActiveProducts = async () => {
  const { data } = await strapiClient({
    path: '/api/products?pagination[limit]=1000&filters[productAvailable][$eq]=true',
    method: 'GET',
  })
  const transformedData = productsTransform(data)
  console.log(transformedData)
  return transformedData
}

export default getAllProducts
