'use client'

import { useState } from 'react'
import Button from '../../atomics/Button/Button'
import Input from '../../atomics/Input/Input'
import Label from '../../atomics/Label/Label'
import { updateFullOrder } from '@/client/orders/orders'

const EditOrder = ({ currentOrder, children, handleFinish }) => {
  const [comment, setComment] = useState('')
  const [tip, setTip] = useState(0)

  const [partial, setPartial] = useState(0)

  const editOrder = async (isCompleted = false) => {
    let closedData = {}
    if (isCompleted) {
      closedData = {
        dateCompleted: new Date(),
      }
    }
    const savedObject = {
      documentId: currentOrder?.documentId,
      payment: Number(currentOrder?.totalAmount) + Number(tip),
      comment,
      tip: Number(tip),
      partial,
      isCompleted,
      ...closedData,
    }

    console.log(savedObject)
    const result = await updateFullOrder(savedObject)
    handleFinish()
  }

  const handleChange = (setter) => (e) => setter(e.target.value)
  return (
    <div className="flex flex-col gap-1">
      <div>{children}</div>
      <div className="flex flex-col gap-1">
        <h1>Editar pedido:</h1>
        <div className="grid w-full grid-cols-2 gap-4">
          <Label>Propina:</Label>
          <div>
            <Input
              placeholder="propina"
              type="number"
              value={tip}
              onChange={handleChange(setTip)}
            />
          </div>
          <Label>Comentarios:</Label>
          <div>
            <Input
              value={comment}
              onChange={handleChange(setComment)}
              placeholder="comentarios"
            />
          </div>
          <Label>Abono:</Label>
          <div>
            <Input
              value={partial}
              onChange={handleChange(setPartial)}
              type="number"
              placeholder="abono"
            />
          </div>
        </div>
        <div className="mt-10 flex w-full flex-row justify-between">
          <Button onClick={() => editOrder(false)}>Editar</Button>
          <Button
            className="bg-red-600"
            onClick={async () => {
              let c = confirm('Confirma que desea cerrar el pedido')
              if (c) {
                console.log('cerrar')
                await editOrder(true)
              }
            }}
          >
            Cerrar Pedido
          </Button>
        </div>
      </div>
    </div>
  )
}

export default EditOrder
