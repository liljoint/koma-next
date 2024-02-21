import Link from 'next/link'
import Button from '@/app/components/atomics/Button/Button'

const Forbidden = () => {
  return (
    <div className="my-10 flex flex-col">
      <h1>No permitido</h1>
      <div>
        Se prohibe el acceso, debe estar logueado.
        <Link href="login">
          <Button>Entrar</Button>
        </Link>
      </div>
    </div>
  )
}
export default Forbidden
