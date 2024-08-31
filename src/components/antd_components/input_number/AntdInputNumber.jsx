import { InputNumber } from 'antd'
import React from 'react'
const AntdInputNumber = (props) => {
  const { value, onChange, size, min, max, className } = props
  return (
    <InputNumber
      max={max}
      min={min}
      onChange={onChange}
      size={size}
      value={value}
      className={className}
    />
  )
}

export default AntdInputNumber
