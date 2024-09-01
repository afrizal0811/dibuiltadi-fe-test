import { Input } from 'antd'
import React from 'react'

const AntdInput = (props) => {
  const {
    disabled,
    name,
    onChange,
    placeholder,
    type,
    values,
  } = props

  return (
    <Input
      allowClear
      disabled={disabled}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
      value={values}
    />
  )
}

export default AntdInput
