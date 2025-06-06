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

export const updateTable = async ({ id, tableAvailable }) => {
  const body = {
    data: {
      tableAvailable,
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

export const createAndOpenTable = async ({
  id,
  tableAvailable,
  documentId,
}) => {
  const body = {
    data: {
      tableAvailable,
      tableId: id,
      documentId,
    },
  }
  const table = await strapiClient({
    path: `/api/tables/create-and-open`,
    method: 'POST',
    body: body,
  })
  const transformedData = tableTransform(table)
  return transformedData
}

export default getTables
