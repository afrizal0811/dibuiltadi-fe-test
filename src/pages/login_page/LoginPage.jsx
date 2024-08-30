import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import Alert from '../../components/Alert'
import Button from '../../components/Button'
import Input from '../../components/Input'
import imagePath from '../../constants/imagePath'
import { checkValidToken } from '../../utilities/localStorages'
import LoginValidation from '../../validation/LoginValidation'

const LoginPage = () => {
  const { navigate } = useOutletContext()
  const { errors, handleChange, handleSubmit, isLoading, validated } =
    LoginValidation(navigate)

  useEffect(() => {
    if (checkValidToken()) {
      navigate('/')
    }
  }, [navigate])
  return (
    <div className='min-h-screen text-eerie-black flex justify-center items-center'>
      <div className='max-w-screen-lg m-10 bg-white h-auto shadow-2xl rounded-xl flex justify-center'>
        <div className='w-1/2 flex-1 text-center hidden md:flex bg-jet-stream'>
          <div className='flex justify-center items-center'>
            <img
              src={imagePath.login}
              alt='login'
              className='w-5/6 h-5/6 object-contain'
            />
          </div>
        </div>
        <form
          className='md:w-1/2 p-6 md:p-10'
          onSubmit={handleSubmit}
          autoComplete='off'
          noValidate
        >
          <div className='h-full flex flex-col justify-center items-center'>
            <div className='w-full my-10 flex flex-col gap-4'>
              {errors.failedAlert && <Alert text={errors.failedAlert} />}
              <h1 className='mb-4 text-xl sm:text-2xl font-bold'>
                Sign in to your account
              </h1>
              <div>
                <Input
                  placeholder='Input your phone number'
                  type='text'
                  name='phone'
                  label='Phone Number'
                  required
                  onChange={handleChange}
                  isInvalid={validated && errors.phone}
                />
              </div>
              <div>
                <Input
                  placeholder='Input your password'
                  type='password'
                  name='password'
                  label='Password'
                  required
                  onChange={handleChange}
                  isInvalid={validated && errors.password}
                />
              </div>
              <Button
                text='Sign In'
                type='submit'
                disabled={isLoading}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
