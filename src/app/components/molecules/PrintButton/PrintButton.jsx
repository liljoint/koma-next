import posPrinter from '@/actions/posPrinter'
import Button from '@/app/components/atomics/Button/Button'

const PrintButton = ({ content }) => {
  return (
    <>
      <form onSubmit={posPrinter} data-testid="print-form">
        <input type="hidden" value={content} name="content" />
        <Button type="submit" name="printer">
          IMPRIMIR
        </Button>
      </form>
      <div className="hidden" id="info">
        {content}
      </div>
    </>
  )
}
export default PrintButton
