import Input from '../../atomics/Input/Input'

const NewProducts = ({ value, setValue }) => {
  const handleMoreValue = () => {
    setValue(value + 1)
  }
  const handleLessValue = () => {
    setValue(value - 1)
  }
  const handleOnChange = (e) => {
    if (e.target.value > 0) {
      setValue(e.target.value)
    } else if (e.target.value === '') {
      setValue(1)
    } else {
      setValue(value)
    }
  }
  return (
    <div className="flex flex-row items-center gap-2">
      <div
        onClick={handleLessValue}
        className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-2xl bg-purple-400 p-3 font-bold text-white"
      >
        -
      </div>
      <div className="w-16">
        <Input
          className="flex w-full items-center justify-center border-none text-center"
          value={value}
          onChange={handleOnChange}
          type="number"
        />
      </div>
      <div
        onClick={handleMoreValue}
        className="flex h-[50px] w-[50px] cursor-pointer items-center justify-center rounded-2xl bg-purple-400 p-3 font-bold  text-white"
      >
        +
      </div>
    </div>
  )
}

export default NewProducts
