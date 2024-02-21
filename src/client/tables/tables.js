import tableTransform, {
  tablesTransform,
} from '@/client/helpers/tablesTransform'
import { strapiClient } from '@/client/strapiClient'

const getTables = async () => {
  const { data } = await strapiClient({
    path: '/api/tables',
    method: 'GET',
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
  const { data } = await strapiClient({
    path: `/api/tables/${id}`,
    method: 'PUT',
    body: body,
  })
  const transformedData = tableTransform(data)
  return transformedData
}
export default getTables
