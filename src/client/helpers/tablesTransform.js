export const tablesTransform = (tables) => {
  return tables?.map((table) => tableTransform(table))
}
export const tableTransform = ({ id, attributes }) => {
  return {
    id: id,
    name: attributes.tableName,
    available: attributes.tableAvailable,
  }
}
export default tableTransform
