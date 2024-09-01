import { Form } from 'antd'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import {
  Button,
  FormItem,
  Input,
  RangeDatePicker,
  Spin,
} from '../../../components/antd_components'
import { couponsUrl } from '../../../constants/baseUrl'
import { YEARMONTHDAY } from '../../../constants/constants'
import dateFormatter from '../../../utilities/dateFormatter'
import { apiValidation, getApi, putApi } from '../../../utilities/handleApi'
import * as message from '../../../utilities/message'

const ModalViewEditForm = (props) => {
  const { handleCloseModal, searchParams, modalType } = props
  const [form] = Form.useForm()
  const [date, setDate] = useState([])
  const [values, setValues] = useState([])
  const [isLoading, setLoading] = useState(false)

  const isModalEdit = modalType === 'edit'
  const couponCode = searchParams.get('coupon_code')
  const startDate = searchParams.get('start_date')
  const endDate = searchParams.get('end_date')
  const isDateNull = date === null

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      const url = process.env.REACT_APP_BASE_URL + couponsUrl + `/${couponCode}`
      const result = await getApi(url)
      setValues(result)
      setLoading(false)
    }
    fetch()
    setDate([dayjs(startDate, YEARMONTHDAY), dayjs(endDate, YEARMONTHDAY)])
  }, [couponCode, startDate, endDate])

  const handleFinish = async () => {
    const url = process.env.REACT_APP_BASE_URL + couponsUrl + `/${couponCode}`
    const params = {
      start_date: dateFormatter(date[0], YEARMONTHDAY),
      end_date: dateFormatter(date[1], YEARMONTHDAY),
    }
    const result = await putApi(url, params)
    const isError = apiValidation(result)
    if (!isError) {
      message.success('Success')
      handleCancel()
    } else {
      message.error(isError.code)
    }
  }

  const handleCancel = () => {
    form.resetFields()
    handleCloseModal()
  }

  const renderButton = (
    <div className='flex justify-end gap-2'>
      <Button
        className='bg-white hover:!bg-white border hover:!border-jet-stream-dark'
        loading={isLoading}
        onClick={handleCancel}
        text='Batal'
      />
      <Button
        disabled={isDateNull}
        htmlType='submit'
        loading={isLoading}
        text='Simpan'
      />
    </div>
  )

  return (
    <Spin loading={isLoading}>
      <Form
        className='m-4'
        form={form}
        labelAlign='left'
        layout='vertical'
        noValidate
        onFinish={handleFinish}
        onReset={handleCancel}
      >
        <FormItem
          label='Coupon Code'
          name='couponCode'
        >
          <Input
            disabled
            name='couponCode'
            placeholder='Input Coupon Code'
            type='text'
            values={values.code}
          />
        </FormItem>
        <FormItem
          label='Coupon Name'
          name='couponName'
        >
          <Input
            disabled
            name='couponName'
            placeholder='Input Coupon Name'
            type='text'
            values={values.name}
          />
        </FormItem>
        <FormItem
          label='Availablity Date'
          name='dateRange'
        >
          <RangeDatePicker
            className='w-full'
            disabled={!isModalEdit}
            format={YEARMONTHDAY}
            onChange={setDate}
            values={date}
          />
        </FormItem>
        {isModalEdit && renderButton}
      </Form>
    </Spin>
  )
}

export default ModalViewEditForm
