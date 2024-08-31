import { Form } from 'antd'
import React from 'react'
import {
  Button,
  FormItem,
  Input,
  RangeDatePicker,
} from '../../components/antd_components'
import { formCol } from '../../constants/constants'
const FilterComp = (props) => {
  const [form] = Form.useForm()
  const { setDate } = props

  return (
    <Form
      autoComplete='off'
      noValidate
      form={form}
      labelCol={formCol}
      labelAlign='left'
    >
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
        label='Buyer Name'
        name='buyerName'
      >
        <Input
          placeholder='Input Buyer Name'
          name='buyerName'
          type='text'
        />
      </FormItem>
      <FormItem
        label='Store Code'
        name='storeCode'
      >
        <Input
          placeholder='Input Store Code'
          name='storeCode'
          type='text'
        />
      </FormItem>
      <FormItem
        label='Date Range'
        name='dateRange'
      >
        <RangeDatePicker
          setDate={setDate}
          className='w-full'
        />
      </FormItem>
      <div className='flex justify-end gap-2'>
        <Button
          text='Hapus Filter'
          className='bg-white hover:!bg-white border hover:!border-jet-stream-dark'
        />
        <Button text='Cari' />
      </div>
    </Form>
  )
}

export default FilterComp
