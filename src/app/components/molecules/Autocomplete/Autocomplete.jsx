import ReactSelect from "react-select";

const Autocomplete = ({ ...rest }) => {
  return (
    <>
      <ReactSelect {...rest} className=" text-black" openMenuOnClick={false} />
    </>
  );
};
export default Autocomplete;
