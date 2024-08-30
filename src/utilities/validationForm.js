const validateForm = (value) => {
  let errors = {}
  const invalidPhone = (data) => /^[0-9]*$/.test(data)

  if (!value.phone) {
    errors.phone = 'This field is required'
  } else if (!invalidPhone(value.phone)) {
    errors.phone = 'Input number only'
  } else if (!value.password) {
    errors.password = 'This field is required'
  } else if (value.password.length < 8) {
    errors.password = 'Password min 8 characters'
  } 
  return errors
}

export default validateForm
