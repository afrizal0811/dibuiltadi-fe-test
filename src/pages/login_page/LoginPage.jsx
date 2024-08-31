import { Form } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Alert,
  Button,
  FormItem,
  Input,
  InputPassword,
} from '../../components/antd_components'
import imagePath from '../../constants/imagePath'
import { getToken } from '../../utilities/localStorages'
import LoginValidation from '../../validation/LoginValidation'
import { findField } from './help'

const LoginPage = () => {
  const [form] = Form.useForm()
  const navigate = useNavigate()
  const { errors, handleChange, handleFinish, isLoading, isSubmitted } =
    LoginValidation(navigate)
  const [fields, setFields] = useState([])

  useEffect(() => {
    if (getToken()) {
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
        <div className='md:w-1/2 p-6 md:p-10'>
          <div className='h-full flex flex-col justify-center items-center'>
            <div className='w-full my-10 flex flex-col'>
              {errors.failedAlert && (
                <Alert
                  message={errors.failedAlert}
                  type='error'
                  className='mb-5'
                />
              )}
              <Form
                onFinish={handleFinish}
                autoComplete='off'
                noValidate
                layout='vertical'
                form={form}
                fields={fields}
                onFieldsChange={(_, allFields) => {
                  setFields(allFields)
                }}
              >
                <img
                  src={imagePath.logo}
                  alt='logo'
                  className='w-20 h-20 object-contain mx-auto mb-1'
                />
                <h1 className='mb-6 text-xl sm:text-2xl font-bold text-center'>
                  Sign in to your account
                </h1>
                <FormItem
                  errors={errors.phone}
                  label='Phone Number'
                  name='phone'
                  fields={findField(fields, 'phone')}
                  isSubmitted={isSubmitted}
                >
                  <Input
                    placeholder='Input your phone number'
                    name='phone'
                    type='text'
                    onChange={handleChange}
                  />
                </FormItem>
                <FormItem
                  errors={errors.password}
                  label='Password'
                  name='password'
                  fields={findField(fields, 'password')}
                  isSubmitted={isSubmitted}
                >
                  <InputPassword
                    placeholder='Input your password'
                    name='password'
                    type='password'
                    onChange={handleChange}
                  />
                </FormItem>
                <Button
                  text='Sign In'
                  htmlType='submit'
                  disabled={isLoading}
                  block
                />
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
