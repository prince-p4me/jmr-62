import React from "react";
import { Form, Item } from "native-base";
import { Field } from "redux-form";
import FormPicker from "../Components/FormPicker";
import ButtonWithLoader from "./ButtonWithLoader";
import FormField from "./FormField";
import FormValidation from "../../Services/FormValidation";

const AddItemForm = ({ handleSubmit, fetching, packagingTypes }) => (
  <Form>
    <Field
      name="description"
      type="default"
      component={FormField}
      validate={FormValidation.required}
      placeholder="Enter Description"
    />
    <Field
      name="packagingType"
      mode="dropdown"
      component={FormPicker}
      validate={FormValidation.required}
      placeholder={"Select Packaging Type"}
    >
      {packagingTypes.map(type => (
        <Item label={type.name} value={type} key={type.id} />
      ))}
    </Field>
    <Field
      name="quantity"
      type="number-pad"
      component={FormField}
      validate={[FormValidation.required, FormValidation.number]}
      placeholder="Enter Quantity"
    />
    <ButtonWithLoader
      fetching={fetching}
      title="Add Item"
      onPress={handleSubmit}
    />
  </Form>
);

export default AddItemForm;
