import { DatePicker } from 'antd'
import React from 'react'

const AntdRangeDatePicker = (props) => {
  const { picker, setDate, className } = props
  const handleChange = (date, dateString) => {
    setDate(dateString)
  }
  return (
    <DatePicker.RangePicker
      className={className}
      onChange={handleChange}
      picker={picker}
    />
  )
}

export default AntdRangeDatePicker
