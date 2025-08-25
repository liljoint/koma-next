import { Button as UiButton } from '@/mt'

const Button = ({ onClick, ...rest }) => {
  return <UiButton onClick={onClick} {...rest} />
}
export default Button
