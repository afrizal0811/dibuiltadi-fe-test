import React, { useEffect, useState } from 'react'
import { Chart } from 'react-google-charts'
import { RangeDatePicker, Spin } from '../../../../components/antd_components'
import { orderSummaryUrl } from '../../../../constants/baseUrl'
import dateFormatter from '../../../../utilities/dateFormatter'
import { getApi } from '../../../../utilities/handleApi'
import { data, options } from './help'

const OrderChart = (props) => {
  const { initialDate, numberData, titleChart, typeData, formatter } = props

  const [value, setValue] = useState([])
  const [date, setDate] = useState(initialDate)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true)
      const url =
        process.env.REACT_APP_BASE_URL +
        orderSummaryUrl +
        `/${typeData}ly?start_${typeData}=${dateFormatter(
          date[0],
          formatter
        )}&end_${typeData}=${dateFormatter(date[1], formatter)}`

      const result = await getApi(url)
      setValue(result.items)
      setIsLoading(false)
    }
    fetch()
  }, [date, typeData])

  return (
    <div className='w-5/6 md:w-5/12 flex flex-col m-4 p-2 border border-gray-100 rounded-xl shadow-xl'>
      <div className='w-full  pt-2 z-10 flex flex-col gap-1 justify-center items-center'>
        <p className='text-sm font-semibold'>Date Range</p>
        <RangeDatePicker
          onChange={setDate}
          picker={typeData}
        />
      </div>
      <Spin loading={isLoading}>
        <div className='w-full'>
          <Chart
            chartType='BarChart'
            height='600px'
            data={data(value, typeData, numberData)}
            options={options(titleChart, typeData)}
          />
        </div>
      </Spin>
    </div>
  )
}

export default OrderChart
