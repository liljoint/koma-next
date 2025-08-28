import { useContext, useState } from 'react'
import { object, string } from 'zod'
import { useRouter } from 'next/navigation'
import { formDataParser } from '@/actions/formDataParser'
import Button from '@/app/components/atomics/Button/Button'
import Input from '@/app/components/atomics/Input/Input'
import { Spinner } from '@material-tailwind/react'
import Alert from '@/app/components/atomics/Alert/Alert'
import auth from '@/client/auth/auth'
import { AppContext } from '@/persistance/Context'

const LoginForm = () => {
  const { setSession } = useContext(AppContext)
  const [formErrors, setFormErrors] = useState({})
  const router = useRouter()
  const [alert, setAlert] = useState(false)
  const loginSchema = object({
    email: string().email({ message: 'Email invalido' }),
    pw: string().min(6, { message: 'Min. 6 caracteres' }),
  })
  const handleClick = async (e) => {
    setFormErrors({})
    e.preventDefault()
    const formData = new FormData(e.target)
    const data = formDataParser(formData)

    try {
      const result = loginSchema.parse(data)
      setAlert(true)
      const authData = await auth(result)
      if (authData?.error) {
        throw authData?.error
      }
      if (authData?.user?.isAdmin) {
        setSession(authData)
        localStorage.setItem('session', JSON.stringify(authData))
        setAlert(false)
        router.push('/')
      } else {
        setAlert(false)
        setFormErrors({ form: 'No es administrador' })
      }
    } catch (error) {
      setAlert(false)
      const err = {}
      if (error?.issues) {
        error?.issues?.map((e) => {
          err[e.path[0]] = e.message
        })
        setFormErrors(err)
      } else {
        setFormErrors({
          form: error.message,
        })
      }
    }
  }

  const onChange = () => {
    setFormErrors({})
  }
  return (
    <>
      <h1>Log In</h1>
      <div className="pt-5">
        <form
          className="flex flex-col gap-3"
          onSubmit={handleClick}
          method="post"
        >
          <div className="">
            <Input
              name="email"
              color="green"
              error={formErrors['email'] ? true : undefined}
              label={formErrors['email'] ? formErrors['email'] : 'Email'}
              onChange={onChange}
            />
          </div>
          <div>
            <Input
              type="password"
              name="pw"
              error={formErrors['pw'] ? true : undefined}
              label={formErrors['pw'] ? formErrors['pw'] : 'Contraseña'}
              onChange={onChange}
            />
          </div>
          <Button type="submit" disabled={alert}>
            Ingresar
          </Button>
        </form>
      </div>

      <Alert color="blue" open={alert} onClose={() => setAlert(false)}>
        Logueando <Spinner />
      </Alert>
      <Alert
        color="red"
        open={formErrors['form'] ? true : false}
        onClose={() => setFormErrors({})}
      >
        {formErrors['form']}
      </Alert>
    </>
  )
}
export default LoginForm
