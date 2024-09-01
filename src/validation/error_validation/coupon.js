const validateForm = (value, date) => {
  const newDate = date ? date : []
  let errors = {}

  if (!value.couponCode) {
    errors.couponCode = 'This field is required'
  } else if (value.couponCode.length < 8 || value.couponCode.length > 8) {
    errors.couponCode = 'Code must have 8 characters'
  }

  if (!value.couponName) {
    errors.couponName = 'This field is required'
  }

  if (newDate.length === 0 || newDate === undefined) {
    errors.dateRange = 'This field is required'
  }

  return errors
}

export default validateForm
