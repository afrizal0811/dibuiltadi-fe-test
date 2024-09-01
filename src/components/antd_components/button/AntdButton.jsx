import { Button } from 'antd'
import React from 'react'
const AntdButton = (props) => {
  const { text, type, disabled, htmlType, block, onClick, className, name } =
  props
  return (
    <Button
      block={block}
      className={`font-bold bg-jet-stream rounded-lg border !border-jet-stream hover:!bg-jet-stream-dark hover:!text-eerie-black disabled:!bg-gray-200 disabled:!text-gray-500 ${className}`}
      disabled={disabled}
      htmlType={htmlType}
      name={name}
      onClick={onClick}
      type={type}
    >
      {text}
    </Button>
  )
}

export default AntdButton
