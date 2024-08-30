import { DatePicker } from 'antd'
import React, { useEffect, useState } from 'react'
import { Chart } from 'react-google-charts'
import { orderSummaryUrl } from '../../../../constants/baseUrl'
import { getApi } from '../../../../utilities/handleApi'
import { data, options } from './help'
const { RangePicker } = DatePicker

const MonthlyOrders = () => {
  const [value, setValue] = useState([])
  const [date, setDate] = useState(['2022-01', '2024-08'])

  const handleChange = (date, dateString) => {
    setDate(dateString)
  }
  
  useEffect(() => {
    const fetch = async () => {
      const url =
        process.env.REACT_APP_BASE_URL +
        orderSummaryUrl +
        `/monthly?start_month=${date[0]}&end_month=${date[1]}`
      const result = await getApi(url)
      setValue(result.items)
    }
    fetch()
  }, [date])

  return (
    <div className='flex flex-col gap-4'>
      <Chart
        chartType='BarChart'
        width='100%'
        height='600px'
        data={data(value)}
        options={options}
      />
      <div className='w-full'>
        <RangePicker
          onChange={handleChange}
          picker='month'
        />
      </div>
    </div>
  )
}

export default MonthlyOrders
