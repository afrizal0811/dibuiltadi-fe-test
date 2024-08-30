import { Alert } from 'antd'
import React from 'react'

const AntdAlert = (props) => {
  const { message, type, className } = props
  const StyledMessage = <p className='font-semibold'>{message}</p>
  return (
    <div className={className}>
      <Alert
        message={StyledMessage}
        type={type}
        showIcon
      />
    </div>
  )
}

export default AntdAlert
