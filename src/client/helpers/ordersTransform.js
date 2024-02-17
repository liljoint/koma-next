export const ordersTransform = (orders) => {
  return orders?.map((order) => orderTransform(order))
}
export const orderTransform = ({ id, attributes }) => {
  return {
    id: id,
    isCompleted: attributes.isCompleted,
    payment: attributes.payment,
    tip: attributes.tip,
    totalAmount: attributes.totalAmount,
    items: orderItemsTransform(attributes.orders.data),
  }
}

export const orderItemTransform = ({ id, attributes }) => {
  return {
    id,
    totalPrice: attributes.totalPrice,
    unitPrice: attributes.unitPrice,
    quantity: attributes.quantity,
    observation: attributes.observation,
  }
}

export const orderItemsTransform = (items) => {
  return items?.map((item) => orderItemTransform(item))
}
export default ordersTransform
