import { FormControl, FormLabel, Text, Input } from "@chakra-ui/react";
import { ChangeEventHandler, FocusEventHandler } from "react";

function FormControlInput({
  id,
  label,
  placeholder,
  type,
  name,
  handleChange,
  handleBlur,
  value,
  error,
}: {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  name: string;
  handleChange: ChangeEventHandler<HTMLInputElement>;
  handleBlur: FocusEventHandler<HTMLInputElement>;
  value: string;
  error: string | true | undefined;
}) {
  return (
    <FormControl id={id} isRequired>
      <FormLabel>{label}</FormLabel>
      <Input
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={value}
      />
      <Text color="red">{error}</Text>
    </FormControl>
  );
}

export default FormControlInput;
