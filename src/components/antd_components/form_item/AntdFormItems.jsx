import { Form } from 'antd'
import React from 'react'
const AntdFormItems = (props) => {
  const { label, name, errors, children, fields } = props
  const { touched } = fields ?? {}
  const isErrorTouched = !!errors && touched
  const isError = isErrorTouched || !!errors 
  return (
    <Form.Item
      label={label}
      name={name}
      help={isError && errors}
      validateStatus={isError ? 'error' : undefined}
    >
      {children}
    </Form.Item>
  )
}

export default AntdFormItems
