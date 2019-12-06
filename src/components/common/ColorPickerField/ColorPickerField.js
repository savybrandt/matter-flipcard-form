import React from 'react';
import PropTypes from 'prop-types';
import { CirclePicker } from 'react-color';

const ColorPickerField = ({ setFieldValue, ...rest }) => (
  <CirclePicker
    {...rest}
    onChange={() => {}}
    onChangeComplete={(color) => setFieldValue(rest.name, color.hex)}
  />
);

ColorPickerField.propTypes = {
  setFieldValue: PropTypes.func.isRequired,
};

export default ColorPickerField;
