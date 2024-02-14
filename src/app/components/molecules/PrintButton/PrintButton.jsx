import posPrinter from '@/app/actions/posPrinter'
import Button from '../../atomics/Button/Button'

const PrintButton = ({ content }) => {
  const body = `<html><style>body {
    font-size: 2rem
  }</style><body>${content.map((c) => {
    return `<div>${c.quantity} ${c.name}</div>`
  })}</body></html>`
  return (
    <>
      <form action={posPrinter}>
        <input type="hidden" value={body} name="content" />
        <Button type="submit">IMPRIMIR</Button>
      </form>
      <div className="hidden" id="info">
        {body}
      </div>
    </>
  )
}
export default PrintButton
