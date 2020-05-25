import React from 'react';
import {
  FinalStyledSubmitButton
} from './final-button-styled';

export const FinalSubmitButton = props => {
  const {title, handler, type} = props;
  return (
    <FinalStyledSubmitButton type={type} onClick={handler}>
      {title}
    </FinalStyledSubmitButton>
  )
}