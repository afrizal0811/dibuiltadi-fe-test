const validateForm = (value) => {
  let errors = {}
  const invalidPhone = (data) => /^[0-9]*$/.test(data)

  if (value.phone.length <= 0) {
    errors.phone = 'This field is required'
  } else if (!invalidPhone(value.phone)) {
    errors.phone = 'Input number only'
  } else if (!value.password) {
    errors.password = 'This field is required'
  } 
  return errors
}

export default validateForm
