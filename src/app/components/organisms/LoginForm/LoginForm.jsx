import { useState } from 'react'
import { object, string } from 'zod'
import { formDataParser } from '@/actions/formDataParser'
import Button from '@/app/components/atomics/Button/Button'
import Input from '@/app/components/atomics/Input/Input'
import { Spinner } from '@material-tailwind/react'
import Alert from '../../atomics/Alert/Alert'

const LoginForm = () => {
  const [formErrors, setFormErrors] = useState({})
  const [alert, setAlert] = useState(false)
  const loginSchema = object({
    email: string().email({ message: 'Email invalido' }),
    pw: string().min(6, { message: 'Min. 6 caracteres' }),
  })
  const handleClick = (e) => {
    setFormErrors({})
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = formDataParser(formData)

    try {
      const result = loginSchema.parse(data)
      setAlert(true)
      setTimeout(() => {
        setAlert(false)
      }, 4000)
      console.log(result)
    } catch (error) {
      const err = {}
      error?.issues?.map((e) => {
        err[e.path[0]] = e.message
      })
      setFormErrors(err)
    }
  }

  const onChange = () => {
    setFormErrors({})
  }
  return (
    <>
      <h1>LogIn</h1>
      <div className="pt-5">
        <form
          className="flex flex-col gap-3"
          onSubmit={handleClick}
          method="post"
        >
          <div className="">
            <Input
              name="email"
              placeholder="Email"
              color="green"
              error={formErrors['email'] ? true : false}
              label={formErrors['email'] ? formErrors['email'] : 'Email'}
              onChange={onChange}
            />
          </div>
          <div>
            <Input
              type="password"
              name="pw"
              placeholder="Contraseña"
              error={formErrors['pw'] ? true : false}
              label={formErrors['pw'] ? formErrors['pw'] : 'Contraseña'}
              onChange={onChange}
            />
          </div>
          <Button type="submit" disabled={alert}>
            Ingresar
          </Button>
        </form>
      </div>

      <Alert color="red" open={alert} onClose={() => setAlert(false)}>
        Logueando <Spinner />
      </Alert>
    </>
  )
}
export default LoginForm
