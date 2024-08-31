import { Collapse } from 'antd'
import React from 'react'

const AntdCollapse = (props) => {
  const { children, header, className } = props
  return (
    <Collapse className={className}>
      <Collapse.Panel header={header}>{children}</Collapse.Panel>
    </Collapse>
  )
}

export default AntdCollapse
