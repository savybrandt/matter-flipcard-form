import React from 'react';
import { CirclePicker } from 'react-color';

const ColorPickerField = ({setFieldValue, ...rest}) => (
  <CirclePicker
    {...rest}
    onChange={() => {}}
    onChangeComplete={color => setFieldValue(rest.name, color.hex)}
  ></CirclePicker>
);

export default ColorPickerField;