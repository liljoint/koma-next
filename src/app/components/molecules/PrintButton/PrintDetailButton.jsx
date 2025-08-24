'use client'
import detailPrinter from '@/actions/detailPrinter'
import Button from '@/app/components/atomics/Button/Button'

const PrintDetailButton = ({ content }) => {
  return (
    <>
      <form action={detailPrinter} data-testid="print-form">
        <input type="hidden" value={content} name="content" />
        <Button type="submit" name="printer" data-testid="print-button">
          IMPRIMIR DETALLE
        </Button>
      </form>
      <div className="hidden" id="info">
        {content}
      </div>
    </>
  )
}
export default PrintDetailButton
