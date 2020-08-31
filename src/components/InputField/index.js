import React from 'react';
import { Input } from './InputField.styled';

const InputField = ({ ...otherprops }) => (
  <Input {...otherprops} className="mb-4" />
);

export default InputField;