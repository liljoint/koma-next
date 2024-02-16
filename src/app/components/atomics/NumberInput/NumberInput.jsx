import Input from '@/app/components/atomics/Input/Input'

const NumberInput = ({ onChange, ...rest }) => {
  const handleChange = ({ target }) => {
    onChange(target.value)
  }
  return <Input type="number" onChange={handleChange} {...rest} />
}
export default NumberInput
