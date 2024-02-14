import { Dialog, DialogBody, DialogHeader } from '@material-tailwind/react'
import XIcon from '@/app/components/icons/XIcon'
export const ModalHeader = ({ children, handler, ...rest }) => {
  console.log(children)
  return (
    <DialogHeader {...rest}>
      <div
        className={`flex w-full ${children ? ' items-center justify-between' : 'items-end justify-end'}`}
      >
        {children}
        <div className="cursor-pointer" onClick={handler}>
          <XIcon color="white" className="h-5 w-5 rounded-md" />
        </div>
      </div>
    </DialogHeader>
  )
}
export const ModalBody = ({ children, ...rest }) => {
  return <DialogBody {...rest}>{children}</DialogBody>
}
const ModalCustom = ({
  isOpen,
  children,
  title,
  handler,
  className,
  ...rest
}) => {
  return (
    <Dialog
      open={isOpen}
      className={`bg-black p-3 ${className}`}
      handler={handler}
      dismiss={{
        outsidePress: false,
      }}
      {...rest}
    >
      {children}
    </Dialog>
  )
}
export default ModalCustom
