export const tablesTransform = (tables) => {
  const transformedTables = tables?.map((table) => tableTransform(table))
  return transformedTables.sort((a, b) =>
    a.tableName.localeCompare(b.tableName)
  )
}
export const tableTransform = ({
  id,
  tableName,
  tableAvailable,
  documentId,
}) => {
  return {
    id: id,
    tableName,
    tableAvailable,
    documentId,
  }
}
export default tableTransform
