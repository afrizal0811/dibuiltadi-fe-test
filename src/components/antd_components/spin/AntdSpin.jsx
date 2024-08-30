import { Spin } from 'antd'
import React from 'react'

const AntdSpin = (props) => {
  const { loading, children } = props
  return <Spin spinning={loading}>{children}</Spin>
}

export default AntdSpin
