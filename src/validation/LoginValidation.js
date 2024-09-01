import { useEffect, useState } from 'react'
import { loginUrl } from '../constants/baseUrl'
import { apiValidation, postApi } from '../utilities/handleApi'
import isObjectEmpty from '../utilities/isObjectEmpty'
import validateForm from './error_validation/login'

const LoginValidation = (navigate, phoneField, passwordField) => {
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [value, setValue] = useState({
    phone: '',
    password: '',
    dateRange: ''
  })

  const isPhoneTouched = phoneField?.touched
  const isPasswordTouched = passwordField?.touched
  const isFieldsTouched = isPhoneTouched || isPasswordTouched

  useEffect(() => {
    if (isSubmitted) setErrors(validateForm(value))
  }, [value, isSubmitted])

  const handleFinish = async () => {
    setIsLoading(true)
    setIsSubmitted(true)
    setErrors(validateForm(value))
    const url = process.env.REACT_APP_BASE_URL + loginUrl
    if (isObjectEmpty(errors) && isFieldsTouched && isSubmitted) {
      const result = await postApi(url, value)
      const isError = await apiValidation(result)
      if (!isError) {
        await navigate('/')
      } else {
        setErrors((prev) => ({
          ...prev,
          failedAlert: isError,
        }))
      }
    }
    setIsLoading(false)
  }

  const handleChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    })
  }
  return {
    errors,
    handleChange,
    handleFinish,
    isLoading,
  }
}

export default LoginValidation
