import { Form } from 'antd'
import dayjs from 'dayjs'
import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import {
  Button,
  FormItem,
  Input,
  Radio,
  RangeDatePicker,
} from '../../components/antd_components'
import { YEARMONTHDAY, formCol, ordersLink } from '../../constants/constants'
import dateFormatter from '../../utilities/dateFormatter'
import removeBlankAttributes from '../../utilities/removeBlankAttributes'
import { sortByOptions, sortDirectionOptions } from './help'

const FilterComp = (props) => {
  const { setSearchParams, searchParams } = props
  const { navigate } = useOutletContext()
  const [form] = Form.useForm()
  const [date, setDate] = useState([])
  const [radio, setRadio] = useState({
    sortBy: 'created_at',
    sortDirection: 'desc',
  })

  useEffect(() => {
    const startDate = searchParams.get('start_date')
    const endDate = searchParams.get('end_date')
    setDate([dayjs(startDate, YEARMONTHDAY), dayjs(endDate, YEARMONTHDAY)])
  }, [searchParams])

  const handleFinish = (values) => {
    const params = {
      sort_by: radio.sortBy,
      sort_direction: radio.sortDirection,
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
        <Radio
          name='sortBy'
          options={sortByOptions}
          setRadio={setRadio}
          values={radio.sortBy}
          optionType='button'
          buttonStyle='solid'
        />
      </FormItem>
      <FormItem
        label='Sort Direction'
        name='sortDirection'
      >
        <Radio
          name='sortDirection'
          options={sortDirectionOptions}
          setRadio={setRadio}
          values={radio.sortDirection}
          optionType='button'
          buttonStyle='solid'
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
