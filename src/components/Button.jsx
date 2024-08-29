import React from 'react'

const Button = (props) => {
  const { text, type, disabled } = props
  return (
    <button
      className='tracking-wide font-bold bg-jet-stream text-white-500 w-full py-4 rounded-lg hover:bg-pewter-blue transition-all duration-200 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none disabled:bg-gray-200 disabled:text-gray-500 disabled:cursor-not-allowed'
      type={type}
      disabled={disabled}
    >
      <span>{text}</span>
    </button>
  )
}

export default Button
