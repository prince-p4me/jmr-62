import React from "react";
import { Picker, Item } from "native-base";
const PickerComponent = ({ placeholder, onPickerChange, items, item }) => (
  <Picker
    selectedValue={item.bagTypeId}
    onValueChange={value => {
      onChange(value);
      onPickerChange(value, item);
    }}
    placeholder={placeholder}
    style={{ marginLeft: -7 }}
  >
    {items.map(item => (
      <Picker.Item
        label={item.name}
        value={item.packing_id}
        key={item.packing_id}
      />
    ))}
  </Picker>
);

export default PickerComponent;
