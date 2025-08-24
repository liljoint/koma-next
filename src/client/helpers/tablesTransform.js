export const tablesTransform = (tables) => {
  const transformedTables = tables?.map((table) => tableTransform(table))
  return transformedTables.sort((a, b) => a.name.localeCompare(b.name))
}
export const tableTransform = ({
  id,
  tableName,
  tableAvailable,
  documentId,
}) => {
  return {
    id: id,
    name: tableName,
    tableAvailable,
    documentId,
  }
}
export default tableTransform
