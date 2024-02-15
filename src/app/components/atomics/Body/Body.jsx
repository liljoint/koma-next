const Body = ({ children }) => {
  return (
    <div className="m-auto -my-12 flex min-h-[calc(100vh-15rem)] w-[80%] flex-col items-center justify-center rounded-xl bg-bg p-5 shadow-inner shadow-gray-400">
      {children}
    </div>
  )
}
export default Body
