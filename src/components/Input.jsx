import React from 'react'

const Input = (props) => {
  const {
    placeholder,
    type,
    name,
    onChange,
    required,
    pattern,
    className,
    isInvalid,
    label
  } = props
  
  const renderError = isInvalid && (
    <div className='text-red-500 text-sm'>*{isInvalid}</div>
  )
  return (
    <div className='flex flex-col gap-2'>
      <label for={name}>{label}</label>
      <input
        className={`w-full px-4 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white ${className} ${
          isInvalid && 'border-red-500'
        }`}
        type={type}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        pattern={pattern}
        required={required}
      />
      {renderError}
    </div>
  )
}

export default Input
