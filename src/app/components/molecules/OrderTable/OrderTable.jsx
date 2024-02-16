const OrderTable = ({ name, available, onClick }) => {
  return (
    <div
      className={`md:w-17 float-left m-2 aspect-square w-10 cursor-pointer rounded-md text-[0.8rem] sm:w-20 sm:text-base ${available ? 'bg-green-500' : 'bg-red-500'} ${available ? 'hover:bg-green-600' : 'hover:bg-red-600'} p-1 `}
      onClick={onClick}
    >
      {name}
    </div>
  )
}
export default OrderTable
