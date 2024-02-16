import ReactSelect from 'react-select'

const Autocomplete = ({ ...rest }) => {
  return (
    <>
      <ReactSelect {...rest} className=" text-text" openMenuOnClick={false} />
    </>
  )
}
export default Autocomplete
