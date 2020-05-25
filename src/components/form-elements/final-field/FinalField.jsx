import React from 'react'
import {
  Label,
  FinalInput,
  Error,
  FinalCheckBox
} from './final-field-styled'

const FinalField = ({mainProps}) => {
  const {input, meta, placeholder, label} = mainProps;
  const {name, value, onChange, onFocus, onBlur, checked, type} = input;
  const {touched, error, active} = meta;
  const generateLabel = () => {
    return label ? <Label>{label}</Label>: null;
  };

  const generateFinalField = () => {
    switch(type){
      case 'text':
        return <FinalInput
          type="text"
          {...input}
          placeholder={placeholder}
        />;

      case 'email':
        return <FinalInput
          type="email"
          {...input}
          placeholder={placeholder}
        />;

      case 'checkbox':
        return <FinalCheckBox
          {...input}
          value={checked}
        />;

      case 'textAreaField':
        return <textarea name="" id="" cols="30" rows="10" />

      case 'phoneField':
        return <input type="text"/>

      default:

        return <input type="text" name='default'/>
    }
  };

  const generateError = () => {
    return (touched && error) ? <Error>{error}</Error> : null;
  };

  return (
    <>
      {generateLabel()}
      {generateFinalField()}
      {generateError()}
    </>
  )
};

export default FinalField;
