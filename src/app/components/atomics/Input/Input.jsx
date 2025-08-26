const Input = ({ className, ...rest }) => {
  return (
    <input
      className={`h-10 rounded-xl border border-gray-400 ${className}`}
      {...rest}
    />
  )
}
export default Input
