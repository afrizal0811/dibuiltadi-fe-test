import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '../../components/antd_components'
const NotFoundPage = () => {
  const navigate = useNavigate()
  return (
    <div className='min-h-screen text-eerie-black flex flex-col gap-4 justify-center items-center '>
      <div className='flex justify-center items-center gap-2'>
        <h1 className='text-[130px] sm:text-[200px] font-bold'>4</h1>
        <div className='w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] bg-jet-stream rounded-full' />
        <h1 className='text-[130px] sm:text-[200px] font-bold'>4</h1>
      </div>
      <h1 className='text-md sm:text-xl -mt-4 sm:-mt-8 font-bold'>
        We could find the page you're looking for
      </h1>
      <Button
        text='Back to Home'
        className='mt-2'
        onClick={() => {
          navigate('/')
        }}
      />
    </div>
  )
}

export default NotFoundPage
