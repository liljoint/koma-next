import { useState } from 'react'
import Button from '@/app/components/atomics/Button/Button'
import Input from '@/app/components/atomics/Input/Input'
import { validateUser } from '@/client/user/users'
import Label from '@/app/components/atomics/Label/Label'

export const WaiterPassword = ({
  field,
  fieldSetter,
  setValid,
  setUserInfo,
}) => {
  const [error, setError] = useState('false')
  const validatePass = async () => {
    const res = await validateUser(field)
    if (res && res !== null) {
      setValid(true)
      setError('false')
      setUserInfo(res)
    } else {
      setError('true')
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
            error={error || undefined}
          />
          {error && error !== 'false' ? (
            <Label className="text-xs !text-red-500">Contraseña inválida</Label>
          ) : undefined}
        </div>
      </div>
      <Button
        className="mx-auto flex w-2/5 items-center justify-center"
        onClick={validatePass}
      >
        Validar
      </Button>
    </div>
  )
}
