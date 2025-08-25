'use client'
import detailPrinter from '@/actions/detailPrinter'
import Button from '@/app/components/atomics/Button/Button'

const PrintDetailButton = ({ products }) => {
  return (
    <>
      <Button
        name="printer"
        data-testid="print-button"
        onClick={() => detailPrinter(products)}
      >
        IMPRIMIR DETALLE
      </Button>
    </>
  )
}
export default PrintDetailButton
