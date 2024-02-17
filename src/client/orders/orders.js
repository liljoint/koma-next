import ordersTransform from '../helpers/ordersTransform'
import { strapiClient } from '../strapiClient'

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
export default getOrders
