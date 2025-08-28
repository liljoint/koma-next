const Body = ({ children }) => {
  return (
    <div className="m-auto -my-12 flex h-[80vh] w-[80%] flex-col items-center rounded-xl bg-bg p-5 text-[1rem] shadow-inner shadow-gray-400 md:text-sm">
      {children}
    </div>
  )
}
export default Body
