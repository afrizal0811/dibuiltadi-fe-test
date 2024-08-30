import { Input } from 'antd'
import React from 'react'
const AntdInput = (props) => {
  const { placeholder, type, name, onChange } = props

  return (
    <div className='flex flex-col gap-2'>
      <Input
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
      />

      {/* className={`w-full px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white ${className} ${
          isInvalid && 'border-red-500'
        }`} */}
    </div>
  )
}

export default AntdInput
