'use client'

const EditOrder = ({ currentOrder, children }) => {
  return (
    <div className="flex flex-col gap-1">
      <div>{children}</div>
      <div className="flex flex-col gap-1">
        <h1>Editar pedido:</h1>
        <div>{JSON.stringify(currentOrder)}</div>
      </div>
    </div>
  )
}

export default EditOrder
