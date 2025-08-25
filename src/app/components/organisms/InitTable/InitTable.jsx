import Button from '@/app/components/atomics/Button/Button'
import { WaiterPassword } from '../WaiterPassword/WaiterPassword'
import { useState } from 'react'

const InitTable = ({ onClick, title }) => {
  const [pass, setPass] = useState('')
  const [isValid, setValid] = useState(false)
  return (
    <>
      {isValid ? (
        <>
          <h1>{title}</h1>
          Desea inicializar la mesa seleccionada?
          <Button onClick={onClick}>Activar</Button>
        </>
      ) : (
        <WaiterPassword
          field={pass}
          fieldSetter={setPass}
          setValid={setValid}
          setUserInfo={() => {}}
        ></WaiterPassword>
      )}
    </>
  )
}
export default InitTable
