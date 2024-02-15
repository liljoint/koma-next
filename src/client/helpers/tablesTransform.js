const tableTransform = (tables) => {
  return tables?.map(({ id, attributes }) => {
    return {
      id: id,
      name: attributes.tableName,
      available: attributes.tableAvailable,
    }
  })
}
export default tableTransform
