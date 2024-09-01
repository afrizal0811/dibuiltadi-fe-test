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
import { dateFormat } from '../../../constants/constants'
import { getApi, putApi, apiValidation } from '../../../utilities/handleApi'
import dateFormatter from '../../../utilities/dateFormatter'
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

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      const url = process.env.REACT_APP_BASE_URL + couponsUrl + `/${couponCode}`
      const result = await getApi(url)
      setValues(result)
      setLoading(false)
    }
    fetch()
    setDate([dayjs(startDate, dateFormat), dayjs(endDate, dateFormat)])
  }, [couponCode, startDate, endDate])

  const handleFinish = async (values) => {
    const url = process.env.REACT_APP_BASE_URL + couponsUrl + `/${couponCode}`
    const params = {
      start_date: dateFormatter(date[0]),
      end_date: dateFormatter(date[1]),
    }
    const result = await putApi(url, params)
    const isValid = apiValidation(result)
    if (!isValid) handleCancel()
  }

  const handleCancel = () => {
    form.resetFields()
    handleCloseModal()
  }

  const renderButton = (
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
  )

  return (
    <Spin loading={isLoading}>
      <Form
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
            disabled
            values={values.code}
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
            disabled
            values={values.name}
          />
        </FormItem>
        <FormItem
          label='Availablity Date'
          name='dateRange'
        >
          <RangeDatePicker
            values={date}
            format={dateFormat}
            onChange={setDate}
            className='w-full'
            disabled={!isModalEdit}
          />
        </FormItem>
        {isModalEdit && renderButton}
      </Form>
    </Spin>
  )
}

export default ModalViewEditForm
