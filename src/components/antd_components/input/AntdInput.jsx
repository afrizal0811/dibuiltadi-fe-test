import { Input } from 'antd'
import React from 'react'
const AntdInput = (props) => {
  const { placeholder, type, name, onChange } = props

  return (
    <Input
      allowClear
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  )
}

export default AntdInput
