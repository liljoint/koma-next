import {
  NumberInputField,
  NumberInput as UiNumberInput,
} from "@chakra-ui/react";

const NumberInput = ({ ...rest }) => {
  return (
    <UiNumberInput {...rest}>
      <NumberInputField />
    </UiNumberInput>
  );
};
export default NumberInput;
