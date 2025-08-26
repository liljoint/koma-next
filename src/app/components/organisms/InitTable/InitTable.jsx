import Button from '@/app/components/atomics/Button/Button'
import { WaiterPassword } from '../WaiterPassword/WaiterPassword'
import { useState } from 'react'

const InitTable = ({ onClick, title }) => {
  return (
    <>
      <h1>{title}</h1>
      Desea inicializar la mesa seleccionada?
      <Button onClick={onClick}>Activar</Button>
    </>
  )
}
export default InitTable
