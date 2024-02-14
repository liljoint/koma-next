import Button from '../../atomics/Button/Button'

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
