export const tablesTransform = (tables) => {
  return tables?.map((table) => tableTransform(table))
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
