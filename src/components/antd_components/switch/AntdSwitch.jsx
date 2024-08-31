import { Switch } from 'antd'
import React from 'react'

const AntdSwitch = (props) => {
  const { setIsSwitchChecked, unCheckedChildren, checkedChildren, name } = props
  const handleChange = (checked) => {
    setIsSwitchChecked((prev) => ({ ...prev, [name]: checked }))
  }
  return (
    <Switch
      onChange={handleChange}
      unCheckedChildren={unCheckedChildren}
      checkedChildren={checkedChildren}
    />
  )
}

export default AntdSwitch
