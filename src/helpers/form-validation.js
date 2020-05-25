import {
  REQUIRED,
  NAME_LENGTH_LIMIT,
  INVALID_EMAIL,
} from '../constants/validation-constants';

export const nameValidation = name => {
  if(!name) return REQUIRED;
  if(name.length > 80) return NAME_LENGTH_LIMIT;
  return null;
};

export const emailValidation = email => {
  const emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if(!email) return REQUIRED;
  if(!email.match(emailFormat)) return INVALID_EMAIL;
  return null;
}