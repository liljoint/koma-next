const voucherTemplate = (content) => {
  return `<html><style>body {
        font-size: 2rem
      }</style><body>${content.map((c) => {
        return `<div>${c.quantity} ${c.name}</div>`
      })}</body></html>`
}
