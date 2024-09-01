import { Form } from 'antd'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import {
  Button,
  FormItem,
  Input,
  RangeDatePicker,
  Switch,
} from '../../components/antd_components'
import { YEARMONTHDAY, formCol, ordersLink } from '../../constants/constants'
import dateFormatter from '../../utilities/dateFormatter'
import removeBlankAttributes from '../../utilities/removeBlankAttributes'

const FilterComp = (props) => {
  const { setSearchParams, searchParams } = props
  const { navigate } = useOutletContext()
  const [form] = Form.useForm()
  const [date, setDate] = useState([])
  const [isSwitchChecked, setIsSwitchChecked] = useState({
    sortBy: false,
    sortDirection: false,
  })

  useEffect(() => {
    const startDate = searchParams.get('start_date')
    const endDate = searchParams.get('end_date')
    setDate([dayjs(startDate, YEARMONTHDAY), dayjs(endDate, YEARMONTHDAY)])
  }, [searchParams])

  const handleFinish = (values) => {
    const params = {
      sort_by: isSwitchChecked.sortBy ? 'grandtotal' : 'created_at',
      sort_direction: isSwitchChecked.sortDirection ? 'desc' : 'asc',
      invoice_no: values.invoiceNo,
      buyer_phone: values.buyerPhone,
      store_code: values.storeCode,
      start_date: dateFormatter(date[0], YEARMONTHDAY),
      end_date: dateFormatter(date[1], YEARMONTHDAY),
    }
    const newParams = removeBlankAttributes(params)
    setSearchParams(newParams)
  }

  const handleReset = () => {
    form.resetFields()
    navigate(ordersLink)
  }
  return (
    <Form
      autoComplete='off'
      form={form}
      labelAlign='left'
      labelCol={formCol}
      noValidate
      onFinish={handleFinish}
      onReset={handleReset}
    >
      <FormItem
        label='Sort By'
        name='sortBy'
      >
        <Switch
          checkedChildren='Grand Total'
          name='sortBy'
          setIsSwitchChecked={setIsSwitchChecked}
          unCheckedChildren='Created At'
        />
      </FormItem>
      <FormItem
        label='Sort Direction'
        name='sortDirection'
      >
        <Switch
          checkedChildren='Desc'
          name='sortDirection'
          setIsSwitchChecked={setIsSwitchChecked}
          unCheckedChildren='Asc'
        />
      </FormItem>
      <FormItem
        label='Invoice No.'
        name='invoiceNo'
      >
        <Input
          placeholder='Input Invoice Number'
          name='invoiceNo'
          type='text'
        />
      </FormItem>
      <FormItem
        label='Buyer Phone'
        name='buyerPhone'
      >
        <Input
          placeholder='Input Buyer Phone Number'
          name='buyerPhone'
          type='number'
        />
      </FormItem>
      <FormItem
        label='Store Code'
        name='storeCode'
      >
        <Input
          placeholder='Input Store Code'
          name='storeCode'
          type='number'
        />
      </FormItem>
      <FormItem
        label='Date Range'
        name='dateRange'
      >
        <RangeDatePicker
          format={YEARMONTHDAY}
          onChange={setDate}
          className='w-full'
          values={date}
        />
      </FormItem>
      <div className='flex justify-end gap-2'>
        <Button
          text='Hapus Filter'
          className='bg-white hover:!bg-white border hover:!border-jet-stream-dark'
          onClick={handleReset}
        />
        <Button
          text='Cari'
          htmlType='submit'
        />
      </div>
    </Form>
  )
}

export default FilterComp
