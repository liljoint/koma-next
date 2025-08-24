import ordersTransform from '@/client/helpers/ordersTransform'
import { strapiClient } from '@/client/strapiClient'

const getOrders = async () => {
  const {
    data,
    meta: { pagination },
  } = await strapiClient({
    path: '/api/request-orders?filters[isCompleted]=false&sort[0]=updatedAt:desc&populate=*',
    method: 'GET',
  })
  const transformData = ordersTransform(data)
  return { data: transformData, pagination }
}

export const getCurrentOrder = (table) => async (url) => {
  const data = await strapiClient({
    path: url,
    method: 'POST',
    body: table,
  })
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
  return result
}
export default getOrders
