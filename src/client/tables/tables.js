import client from '@/client/client'
import tableTransform, {
  tablesTransform,
} from '@/client/helpers/tablesTransform'

const getTables = async () => {
  const { data } = await client({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_CLIENT,
    path: '/api/tables',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_PUBLIC_BEARER}`,
    },
  })
  const transformedData = tablesTransform(data)
  return transformedData
}

export const updateTable = async ({ id, available }) => {
  const body = {
    data: {
      tableAvailable: available,
    },
  }
  const { data } = await client({
    baseUrl: process.env.NEXT_PUBLIC_STRAPI_CLIENT,
    path: `/api/tables/${id}`,
    method: 'PUT',
    body: body,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_PUBLIC_BEARER}`,
    },
  })
  const transformedData = tableTransform(data)
  return transformedData
}
export default getTables
