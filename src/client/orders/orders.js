import ordersTransform from '@/client/helpers/ordersTransform'
import { strapiClient } from '@/client/strapiClient'

const getOrders = async () => {
  const {
    data,
    meta: { pagination },
  } = await strapiClient({
    path: '/api/request-orders?populate=*',
    method: 'GET',
  })
  const transformData = ordersTransform(data)
  return { data: transformData, pagination }
}

export const getCurrentOrder = async (table) => {
  const data = await strapiClient({
    path: '/api/request-order/get-current-request-order',
    method: 'POST',
    body: table,
  })
  console.log(data)
  return data
}

export const createOrder = async (order) => {
  const { data } = await strapiClient({
    path: '/api/request-order',
    method: 'POST',
    body: order,
  })
  const transformData = ordersTransform(data)
  return { data: transformData, pagination }
}
export const updateProductOrder = async (table, products) => {
  const body = {
    data: {
      table,
      products,
    },
  }
  const result = await strapiClient({
    path: `/api/request-order/update-request-order`,
    method: 'POST',
    body: body,
  })
  const transformedData = tableTransform(result)
  return transformedData
}
export default getOrders
