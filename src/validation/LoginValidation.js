import { useEffect, useState } from 'react'
import { apiValidation, postApi } from '../utilities/handleApi'
import isObjectEmpty from '../utilities/isObjectEmpty'
import validateForm from '../utilities/validationForm'
import { loginUrl } from '../constants/baseUrl'
const LoginValidation = (navigate) => {
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [validated, setValidated] = useState(false)
  const [value, setValue] = useState({
    phone: '',
    password: '',
  })

  useEffect(() => {

    setErrors(validateForm(value))
  }, [value])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    setValidated(true)
    const url = process.env.REACT_APP_BASE_URL + loginUrl
    if (isObjectEmpty(errors)) {
      const result = await postApi(url, value)
      const isError = apiValidation(result)
      if (!isError) {
        navigate('/')
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
    handleSubmit,
    isLoading,
    validated,
  }
}

export default LoginValidation
