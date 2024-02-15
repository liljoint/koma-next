const Label = ({ children, ...rest }) => {
  return (
    <div className="text-text" {...rest}>
      {children}
    </div>
  )
}
export default Label
