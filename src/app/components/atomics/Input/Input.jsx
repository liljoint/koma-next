const Input = ({ className, ...rest }) => {
  return (
    <input
      className={`h-10 rounded-xl border border-gray-400 p-4 ${className}`}
      {...rest}
    />
  )
}
export default Input
