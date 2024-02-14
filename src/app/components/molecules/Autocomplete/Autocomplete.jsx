import ReactSelect from 'react-select'

const Autocomplete = ({ ...rest }) => {
  return (
    <>
      <ReactSelect {...rest} className=" text-bg" openMenuOnClick={false} />
    </>
  )
}
export default Autocomplete
