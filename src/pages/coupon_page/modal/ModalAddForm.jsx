import { Form } from 'antd'
import React, { useState } from 'react'
import {
  Button,
  FormItem,
  Input,
  RangeDatePicker,
} from '../../../components/antd_components'
import getFormField from '../../../utilities/getFormField'
import isObjectEmpty from '../../../utilities/isObjectEmpty'
import CouponValidation from '../../../validation/CouponValidation'

const ModalAddForm = (props) => {
  const { handleCloseModal } = props
  const [form] = Form.useForm()
  const [date, setDate] = useState([])
  const [fields, setFields] = useState([])
  const couponCodeField = getFormField(fields, 'couponCode')
  const couponNameField = getFormField(fields, 'couponName')
  const dateRangeField = getFormField(fields, 'dateRange')

  const handleCancel = () => {
    form.resetFields()
    handleCloseModal()
  }
  const { errors, handleChange, handleFinish, isLoading } = CouponValidation(
    couponCodeField,
    couponNameField,
    dateRangeField,
    date,
    handleCancel
  )

  return (
    <Form
      autoComplete='off'
      className='m-4'
      fields={fields}
      form={form}
      labelAlign='left'
      layout='vertical'
      noValidate
      onFinish={handleFinish}
      onReset={handleCancel}
      onFieldsChange={(_, allFields) => {
        setFields(allFields)
      }}
    >
      <FormItem
        errors={errors.couponCode}
        fields={couponCodeField}
        label='Coupon Code'
        name='couponCode'
      >
        <Input
          name='couponCode'
          onChange={handleChange}
          placeholder='Input Coupon Code'
          type='text'
        />
      </FormItem>
      <FormItem
        errors={errors.couponName}
        fields={couponNameField}
        label='Coupon Name'
        name='couponName'
      >
        <Input
          name='couponName'
          onChange={handleChange}
          placeholder='Input Coupon Name'
          type='text'
        />
      </FormItem>
      <FormItem
        errors={errors.dateRange}
        fields={dateRangeField}
        label='Availablity Date'
        name='dateRange'
      >
        <RangeDatePicker
          className='w-full'
          name='dateRange'
          onChange={setDate}
        />
      </FormItem>
      <div className='flex justify-end gap-2'>
        <Button
          className='bg-white hover:!bg-white border hover:!border-jet-stream-dark'
          loading={isLoading}
          onClick={handleCancel}
          text='Batal'
        />
        <Button
          disabled={!isObjectEmpty(errors)}
          htmlType='submit'
          loading={isLoading}
          text='Simpan'
        />
      </div>
    </Form>
  )
}

export default ModalAddForm
