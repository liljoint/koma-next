export const ordersTransform = (orders) => {
  return orders?.map((order) => orderTransform(order))
}
export const orderTransform = ({ id, ...all }) => {
  return {
    id: id,
    isCompleted: all.isCompleted,
    table: all.table.tableName,
    items: orderItemsTransform(all.orders),
  }
}

export const orderItemTransform = ({ id, ...all }) => {
  return {
    id,
    totalPrice: all.totalPrice,
    unitPrice: all.unitPrice,
    quantity: all.quantity,
    observation: all.observation,
  }
}

export const orderItemsTransform = (items) => {
  return items?.map((item) => orderItemTransform(item))
}
export default ordersTransform
