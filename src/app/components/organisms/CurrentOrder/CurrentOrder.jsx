import { useEffect, useState } from 'react'

const CurrentOrder = ({ className, orders }) => {
  const [total, setTotal] = useState(0)

  useEffect(() => {
    setTotal(
      orders?.reduce((currency, { quantity, unitPrice }) => {
        currency += quantity * unitPrice
        return currency
      }, 0)
    )
  }, [setTotal, orders])
  return (
    <>
      <div className={`w-full ${className}`}>
        <div className="mx-auto grid grid-cols-4 justify-center">
          <div className="col-span-4 font-bold">Detalle actual</div>
          <div className="font-bold">Nombre</div>
          <div className="font-bold">Cantidad</div>
          <div className="font-bold">Unitario</div>
          <div className="font-bold">Total producto</div>
          <div className="col-span-4 flex flex-col ">
            {orders?.map(({ product, quantity, unitPrice }, index) => {
              return (
                <div key={index} className="grid grid-cols-4">
                  <div>{product?.productName}</div>
                  <div>{quantity}</div>
                  <div>$ {Number(unitPrice).toLocaleString('es-CL')}</div>

                  <div className="flex w-1/2 justify-end">
                    $ {Number(quantity * unitPrice).toLocaleString('es-CL')}
                  </div>
                </div>
              )
            })}
          </div>
          <div className="col-span-2 mt-5 flex justify-between">
            <div className="font-bold">Total Pedido:</div>
            <div className="">$ {total?.toLocaleString('es-CL')}</div>
          </div>
        </div>
      </div>
    </>
  )
}
export default CurrentOrder
