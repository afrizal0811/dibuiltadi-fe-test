import { useEffect, useState } from 'react'
import { loginUrl } from '../constants/baseUrl'
import { apiValidation, postApi } from '../utilities/handleApi'
import isObjectEmpty from '../utilities/isObjectEmpty'
import validateForm from '../utilities/validationForm'

const LoginValidation = (navigate) => {
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [value, setValue] = useState({
    phone: '',
    password: '',
  })

  useEffect(() => {
    if (isSubmitted) {
      setErrors(validateForm(value))
    }
  }, [value, isSubmitted])

  const handleFinish = async () => {
    setIsLoading(true)
    setIsSubmitted(true)
    setErrors(validateForm(value))
    const url = process.env.REACT_APP_BASE_URL + loginUrl
    if (isObjectEmpty(errors)) {
      const result = await postApi(url, value)
      const error = apiValidation(result)
      if (!error) {
        navigate('/')
      } else {
        setErrors((prev) => ({
          ...prev,
          failedAlert: error !== 'Validation error' ? error : '',
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
