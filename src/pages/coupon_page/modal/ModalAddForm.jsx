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
      form={form}
      layout='vertical'
      labelAlign='left'
      noValidate
      onFinish={handleFinish}
      onReset={handleCancel}
      className='m-4'
      fields={fields}
      onFieldsChange={(_, allFields) => {
        setFields(allFields)
      }}
    >
      <FormItem
        label='Coupon Code'
        name='couponCode'
        errors={errors.couponCode}
        fields={couponCodeField}
      >
        <Input
          placeholder='Input Coupon Code'
          name='couponCode'
          type='text'
          onChange={handleChange}
        />
      </FormItem>
      <FormItem
        label='Coupon Name'
        name='couponName'
        errors={errors.couponName}
        fields={couponNameField}
      >
        <Input
          placeholder='Input Coupon Name'
          name='couponName'
          type='text'
          onChange={handleChange}
        />
      </FormItem>
      <FormItem
        label='Availablity Date'
        name='dateRange'
        errors={errors.dateRange}
        fields={dateRangeField}
      >
        <RangeDatePicker
          onChange={setDate}
          className='w-full'
          name='dateRange'
        />
      </FormItem>
      <div className='flex justify-end gap-2'>
        <Button
          text='Batal'
          className='bg-white hover:!bg-white border hover:!border-jet-stream-dark'
          onClick={handleCancel}
          loading={isLoading}
        />
        <Button
          text='Simpan'
          htmlType='submit'
          loading={isLoading}
          disabled={!isObjectEmpty(errors)}
        />
      </div>
    </Form>
  )
}

export default ModalAddForm
