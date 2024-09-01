import { Form } from 'antd'
import React, { useState } from 'react'
import {
  Button,
  FormItem,
  Input,
  RangeDatePicker,
} from '../../../components/antd_components'
import { couponsUrl } from '../../../constants/baseUrl'
import getCurrentDate from '../../../utilities/getCurrentDate'
import { postApi, apiValidation } from '../../../utilities/handleApi'
import dateFormatter from '../../../utilities/dateFormatter'

const ModalAddForm = (props) => {
  const { handleCloseModal } = props
  const [form] = Form.useForm()
  const [date, setDate] = useState([getCurrentDate(), getCurrentDate()])

  const handleFinish = async (values) => {
    const url = process.env.REACT_APP_BASE_URL + couponsUrl
    const params = {
      code: values.couponCode,
      name: values.couponName,
      start_date: dateFormatter(date[0]),
      end_date: dateFormatter(date[1]),
    }
    const result = await postApi(url, params)
    const isValid = apiValidation(result)
    if (!isValid) handleCancel()
  }

  const handleCancel = () => {
    form.resetFields()
    handleCloseModal()
  }
  return (
    <Form
      autoComplete='off'
      form={form}
      layout='vertical'
      labelAlign='left'
      noValidate
      onFinish={handleFinish}
      onReset={handleCancel}
      className='m-4'
    >
      <FormItem
        label='Coupon Code'
        name='couponCode'
      >
        <Input
          placeholder='Input Coupon Code'
          name='couponCode'
          type='text'
        />
      </FormItem>
      <FormItem
        label='Coupon Name'
        name='couponName'
      >
        <Input
          placeholder='Input Coupon Name'
          name='couponName'
          type='text'
        />
      </FormItem>
      <FormItem
        label='Availablity Date'
        name='dateRange'
      >
        <RangeDatePicker
          onChange={setDate}
          className='w-full'
        />
      </FormItem>
      <div className='flex justify-end gap-2'>
        <Button
          text='Batal'
          className='bg-white hover:!bg-white border hover:!border-jet-stream-dark'
          onClick={handleCancel}
        />
        <Button
          text='Simpan'
          htmlType='submit'
        />
      </div>
    </Form>
  )
}

export default ModalAddForm
