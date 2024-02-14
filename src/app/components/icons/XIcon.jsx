import { XMarkIcon } from '@heroicons/react/24/outline'

const XIcon = ({ className, ...rest }) => {
  return <XMarkIcon className={`h-5 w-5 ${className}`} {...rest} />
}

export default XIcon
