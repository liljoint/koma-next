export const currentOrderTransform = ({ totalAmount, ...order }) => {
  return {
    totalAmount: Number(totalAmount),
    ...order,
    orders: order.orders.map(({ totalPrice, unitPrice, ...rest }) => ({
      totalPrice: Number(totalPrice),
      unitPrice: Number(unitPrice),
      ...rest,
    })),
  }
}
