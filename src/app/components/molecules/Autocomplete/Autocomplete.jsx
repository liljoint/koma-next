import ReactSelect from 'react-select'

const Autocomplete = ({ ...rest }) => {
  return (
    <ReactSelect className="text-black" openMenuOnClick={false} {...rest} />
  )
}
export default Autocomplete
