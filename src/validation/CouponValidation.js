import { useEffect, useState } from 'react'
import { couponsUrl } from '../constants/baseUrl'
import { YEARMONTHDAY } from '../constants/constants'
import dateFormatter from '../utilities/dateFormatter'
import { apiValidation, postApi } from '../utilities/handleApi'
import isObjectEmpty from '../utilities/isObjectEmpty'
import * as message from '../utilities/message'
import validateForm from './error_validation/coupon'

const CouponValidation = (
  couponCodeField,
  couponNameField,
  dateRangeField,
  date,
  handleCancel
) => {
  const [errors, setErrors] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [value, setValue] = useState({
    couponCode: '',
    couponName: '',
  })

  useEffect(() => {
    if (isSubmitted) setErrors(validateForm(value, date))
  }, [value, isSubmitted, date])

  const isCodeTouched = couponCodeField?.touched
  const isNameTouched = couponNameField?.touched
  const isDateTouched = dateRangeField?.touched
  const isFieldsTouched = isCodeTouched || isNameTouched || isDateTouched

  const handleFinish = async (values) => {
    setIsLoading(true)
    setIsSubmitted(true)
    setErrors(validateForm(value, date))
    const url = process.env.REACT_APP_BASE_URL + couponsUrl
    const params = {
      code: values.couponCode,
      name: values.couponName,
      start_date: dateFormatter(date[0], YEARMONTHDAY),
      end_date: dateFormatter(date[1], YEARMONTHDAY),
    }
    if (isObjectEmpty(errors) && isFieldsTouched && isSubmitted) {
      const result = await postApi(url, params)
      const isError = await apiValidation(result)
      if (!isError) {
        message.success('Success')
        handleCancel()
      } else {
        message.error(isError.code)
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

export default CouponValidation
