const Label = ({ children, className = '', ...rest }) => {
  return (
    <div className={`text-text ${className}`} {...rest}>
      {children}
    </div>
  )
}
export default Label
