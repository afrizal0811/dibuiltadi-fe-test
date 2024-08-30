import { InputNumber } from 'antd'
import React from 'react'
const AntdInputNumber = (props) => {
  const { value, onChange, size, min, max } = props
  return (
    <InputNumber
      max={max}
      min={min}
      onChange={onChange}
      size={size}
      value={value}
    />
  )
}

export default AntdInputNumber
