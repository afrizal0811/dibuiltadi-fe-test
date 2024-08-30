import { Button } from 'antd'
import React from 'react'
const AntdButton = (props) => {
  const { text, type, disabled, htmlType, block } = props
  return (
    <Button
      className='font-bold bg-jet-stream py-6 rounded-lg !border-none hover:!bg-pewter-blue hover:!text-eerie-black disabled:!bg-gray-200 disabled:!text-gray-500'
      type={type}
      disabled={disabled}
      htmlType={htmlType}
      block={block}
    >
      {text}
    </Button>
  )
}

export default AntdButton
