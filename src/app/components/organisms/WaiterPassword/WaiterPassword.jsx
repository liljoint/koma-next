import { useState } from 'react'
import Button from '../../atomics/Button/Button'
import Input from '../../atomics/Input/Input'
import { validateUser } from '@/client/user/users'
import Label from '../../atomics/Label/Label'

export const WaiterPassword = ({
  field,
  fieldSetter,
  setValid,
  setUserInfo,
}) => {
  const [error, setError] = useState(false)
  const validatePass = async () => {
    const res = await validateUser(field)
    if (res && res !== null) {
      setValid(true)
      setError(false)
      setUserInfo(res)
    } else {
      setError(true)
    }
  }
  return (
    <div className="flex  flex-col gap-2">
      <div className="mx-auto flex flex-col items-center justify-center gap-2">
        Ingrese contraseña:
        <div className="flex flex-col">
          <Input
            value={field}
            onChange={(e) => fieldSetter(e.target.value)}
            error={error}
          />
          {error ? (
            <Label className="text-xs !text-red-500">Contraseña inválida</Label>
          ) : null}
        </div>
      </div>
      <Button className="mx-auto w-1/5" onClick={validatePass}>
        Validar
      </Button>
    </div>
  )
}
