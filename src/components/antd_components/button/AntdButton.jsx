import { Button } from 'antd'
import React from 'react'
const AntdButton = (props) => {
  const {
    text,
    type,
    disabled,
    htmlType,
    block,
    onClick,
    className,
    name,
    loading,
  } = props
  return (
    <Button
      block={block}
      className={`font-bold bg-jet-stream rounded-lg border py-4 !border-jet-stream hover:!bg-jet-stream-dark hover:!text-eerie-black disabled:!bg-gray-200 disabled:!text-gray-500 ${className}`}
      disabled={disabled}
      htmlType={htmlType}
      name={name}
      onClick={onClick}
      type={type}
      loading={loading}
    >
      <div className='mt-1'>{text}</div>
    </Button>
  )
}

export default AntdButton
