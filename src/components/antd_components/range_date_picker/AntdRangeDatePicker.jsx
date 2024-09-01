import { DatePicker } from 'antd'
import React from 'react'

const AntdRangeDatePicker = (props) => {
  const { picker, onChange, className, disabled, values, format, name } = props

  return (
    <DatePicker.RangePicker
      className={className}
      disabled={disabled}
      format={format}
      onChange={onChange}
      picker={picker}
      name={name}
      value={values}
    />
  )
}

export default AntdRangeDatePicker
