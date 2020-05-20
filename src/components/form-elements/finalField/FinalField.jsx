import React from 'react'
import {
  FinalFieldContainer,
  Label,
  FinalInput
} from './final-field-styled'

const FinalField = ({mainProps}) => {
  const {input, meta, placeholder, label} = mainProps;
  const {name, value, onChange, onFocus, onBlur, checked, type} = input;
  const {touched, error, active} = meta;

  // implement component types.
  const generateFinalField = () => {
    switch(type){
      case 'textField':
        return <FinalInput
          type="text"
          {...input}
          placeholder={placeholder}
        />

      case 'phoneField':
        return <input type="text"/>

      case 'emailField':
        return <input type="text"/>

      case 'checkBox':
        return <input type="checkbox"/>

      case 'textAreaField':
        return <textarea name="" id="" cols="30" rows="10" />

      default:

        return <input type="text" name='default'/>
    }
  };

  const generateError = () => {
    return (touched && error) ? <span>{error}</span> : null;
  };

  const fieldLabel = (label && <Label>{label}</Label>)

  const generateLabel = () => {
    return label ? <Label>{label}</Label>: null;
  };

  return (
    <FinalFieldContainer>
      {generateLabel()}
      {generateFinalField()}
      {generateError()}
    </FinalFieldContainer>
  )
};

export default FinalField;
