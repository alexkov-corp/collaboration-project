import React from 'react'
import {FinalFieldContainer} from './boutique-form-styled'
import { Form, Field } from 'react-final-form'
import FinalField from '../../form-elements/final-field/FinalField'
import {
  nameValidation,
  emailValidation
} from '../../../helpers/form-validation'
import {FinalSubmitButton} from '../../form-elements/final-button/FinalButton'


const BoutiqueForm = () => {

  const onSubmit = (FormValues, FormApi) => {
    console.log('SUBMIT');
    console.log('FormValues', FormValues);
    console.log('FormApi', FormApi);
    alert(JSON.stringify(FormValues))
  };

  const validate = FormValues => {
    const {name_surname, email} = FormValues;
    const errors = {};

    const name_surname_errors = nameValidation(name_surname);
    if(name_surname_errors) errors['name_surname'] = name_surname_errors

    const email_errors = emailValidation(email);
    if(email_errors) errors['email'] = email_errors;

    return errors;
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <input type="checkbox" name={'checktest'} checked={false}/>
          <FinalFieldContainer>
            <Field name="name_surname" type={'text'} placeholder="Name and Surname">
              {props => <FinalField mainProps={props} />}
            </Field>
          </FinalFieldContainer>
          <FinalFieldContainer>
            <Field name="email" type={'email'} placeholder="Email">
              {props => <FinalField mainProps={props} />}
            </Field>
          </FinalFieldContainer>
          <FinalFieldContainer>
            <Field name="isAcceptPrivacyPolicy" type={'checkbox'}>
              {props => <FinalField mainProps={props} />}
            </Field>
          </FinalFieldContainer>

          <FinalFieldContainer>
            <FinalSubmitButton type={'submit'} title={'Submit'} handler={handleSubmit}/>
          </FinalFieldContainer>
        </form>
      )}
    />
  )
};

export default BoutiqueForm;