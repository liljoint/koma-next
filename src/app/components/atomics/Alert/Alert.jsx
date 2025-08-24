import { Alert as UiAlert } from '@material-tailwind/react'

const Alert = ({ children, className, ...rest }) => {
  return (
    <UiAlert
      color="blue"
      variant="gradient"
      className={`fixed top-10 mx-auto flex w-[50%] ${className}`}
      {...rest}
    >
      <div className="flex gap-5">{children}</div>
    </UiAlert>
  )
}
export default Alert
