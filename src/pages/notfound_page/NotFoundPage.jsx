import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/antd_components'
const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
    <div className='min-h-screen text-eerie-black flex flex-col gap-4 sm:gap-0 justify-center items-center '>
      <div className='flex justify-center items-center gap-2'>
        <h1 className='text-9xl sm:text-[200px] font-bold'>4</h1>
        <div className='w-[100px] h-[100px] sm:w-[180px] sm:h-[180px] bg-jet-stream rounded-full' />
        <h1 className='text-9xl sm:text-[200px] font-bold'>4</h1>
      </div>
      <h1 className='text-md sm:text-xl font-bold'>
        We could find the page you're looking for
      </h1>
      <Button
        text='Back to Home'
        className='mt-2 sm:mt-6'
        onClick={() => {
          navigate('/')
        }}
      />
    </div>
  )
}

export default NotFoundPage
