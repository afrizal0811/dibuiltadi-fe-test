import { Button } from 'antd'
import React from 'react'
const AntdButton = (props) => {
  const {
    block,
    className,
    disabled,
    htmlType,
    icon,
    iconPosition,
    loading,
    name,
    onClick,
    text,
    type,
  } = props
  return (
    <Button
      block={block}
      className={`font-bold bg-jet-stream rounded-lg border !border-jet-stream hover:!bg-jet-stream-dark hover:!text-eerie-black disabled:!bg-gray-200 disabled:!text-gray-500 ${className}`}
      disabled={disabled}
      htmlType={htmlType}
      icon={icon}
      iconPosition={iconPosition}
      loading={loading}
      name={name}
      onClick={onClick}
      type={type}
    >
      <div className='mt-1'>{text}</div>
    </Button>
  )
}

export default AntdButton
