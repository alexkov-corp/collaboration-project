export const nameValidation = name => {
  if(!name) return 'Required';
  if(name.length > 80) return 'Name must be less than 80 symbols';
}