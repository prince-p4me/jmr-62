import React from "react";
import { Text, Item, Input, Picker } from "native-base";
const FormPicker = ({
  input,
  label,
  children,
  placeholder,
  getCities,
  meta: { touched, error, warning },
  ...custom
}) => {
  var hasError = false;
  if (error !== undefined && touched) {
    hasError = true;
  }

  return (
    <Item error={hasError}>
      <Picker
        {...input}
        selectedValue={input.value}
        onValueChange={(value, index) => {
          input.onChange(value);
          getCities ? getCities(value) : null;
        }}
        children={children}
        {...custom}
        placeholder={placeholder}
      />
      {hasError ? <Text>{error}</Text> : <Text />}
    </Item>
  );
};

export default FormPicker;
