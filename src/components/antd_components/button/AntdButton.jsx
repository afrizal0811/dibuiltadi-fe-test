import { Button } from 'antd'
import React from 'react'
const AntdButton = (props) => {
  const { text, type, disabled, htmlType, block, onClick, className } = props
  return (
    <Button
      block={block}
      className={`font-bold bg-jet-stream py-6 rounded-lg !border-none hover:!bg-jet-stream-dark hover:!text-eerie-black disabled:!bg-gray-200 disabled:!text-gray-500 ${className}`}
      disabled={disabled}
      htmlType={htmlType}
      onClick={onClick}
      type={type}
    >
      {text}
    </Button>
  )
}

export default AntdButton
