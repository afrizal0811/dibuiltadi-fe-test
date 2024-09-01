import { Radio } from 'antd'
import React from 'react'

const AntdRadio = (props) => {
  const { setRadio, values, options, optionType, buttonStyle, name } = props

  const handleChange = ({ target: { value } }) => {
    setRadio((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <Radio.Group
      options={options}
      onChange={handleChange}
      value={values}
      optionType={optionType}
      buttonStyle={buttonStyle}
    />
  )
}

export default AntdRadio
