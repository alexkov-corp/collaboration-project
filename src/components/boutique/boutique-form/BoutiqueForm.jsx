import React from 'react'
import {FinalFieldContainer} from './boutique-form-styled'
import { Form, Field } from 'react-final-form'
import FinalField from '../../form-elements/finalField/FinalField'
import {
  nameValidation
} from '../../../helpers/form-validation'


const BoutiqueForm = () => {

  const onSubmit = (FormValues, FormApi) => {
    console.log('submit');
    console.log('FormValues', FormValues);
    console.log('FormApi', FormApi);
  };

  const validate = FormValues => {
    console.log('validate', FormValues);
    return {};
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <FinalFieldContainer>
            <Field name="name_surname" type={'textField'} placeholder="Name and Surname">
              {props => <FinalField mainProps={props} />}
            </Field>
          </FinalFieldContainer>

          <button type="submit">Submit</button>
        </form>
      )}
    />
  )
};

export default BoutiqueForm;