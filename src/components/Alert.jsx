import React from 'react'

const Alert = (props) => {
  const { text } = props
  return (
    <div className='text-red-500 bg-red-200 w-full p-5 rounded-lg font-semibold'>
      {text}
    </div>
  )
}

export default Alert
