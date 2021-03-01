import React from "react";
import { Text, Item, Input } from "native-base";
const FormField = ({
  input,
  placeholder,
  type,
  meta: { touched, error, warning }
}) => {
  var hasError = false;
  if (error !== undefined && touched) {
    hasError = true;
  }
  return (
    <Item error={hasError}>
      <Input {...input} keyboardType={type} placeholder={placeholder} />
      {hasError ? <Text>{error}</Text> : <Text />}
    </Item>
  );
};

export default FormField;
