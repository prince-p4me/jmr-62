import React from "react";
import { Item, DatePicker } from "native-base";

const FormDatePicker = ({
  input,
  placeholder,
  defaultValue,
  meta: { touched, error }
}) => {
  var hasError = false;
  if (error !== undefined && touched) {
    hasError = true;
  }
  return (
    <Item error={hasError}>
      <DatePicker
        {...input}
        defaultDate={new Date()}
        placeHolderText={placeholder}
        // selected={input.value ? moment(input.value) : null}
        // onDateChange={(event, value) =>
        //   input.onChange(moment(value).format("MM/DD/YYYY"))
        // }
        onDateChange={input.onChange}
      />
      {touched && error && <span>{error}</span>}
    </Item>
  );
};

export default FormDatePicker;
