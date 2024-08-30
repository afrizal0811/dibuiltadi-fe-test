import React, { useEffect, useState } from 'react'
import { Chart } from 'react-google-charts'
import { RangeDatePicker, Spin } from '../../../../components/antd_components'
import { orderSummaryUrl } from '../../../../constants/baseUrl'
import { getApi } from '../../../../utilities/handleApi'
import { data, options, removeString } from './help'

const OrderChart = (props) => {
  const {
    initialDate,
    numberData,
    titleChart,
    typeData,
    urlType,
    datePickerType,
  } = props
  const [value, setValue] = useState([])
  const [date, setDate] = useState(initialDate)
  const [isLoading, setIsLoading] = useState(false)
  const params = removeString(urlType)

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true)
      const url =
        process.env.REACT_APP_BASE_URL +
        orderSummaryUrl +
        `/${urlType}?start_${params}=${date[0]}&end_${params}=${date[1]}`
      const result = await getApi(url)
      setValue(result.items)
      setIsLoading(false)
    }
    fetch()
  }, [date, params, urlType])

  return (
    <div className='w-5/6 md:w-5/12 flex flex-col m-4 p-2 border border-gray-100 rounded-xl shadow-xl'>
      <div className='w-full -mb-8 pt-2 z-10 flex flex-col gap-1 justify-center items-center'>
        <p className='text-sm'>Date Range</p>
        <RangeDatePicker
          setDate={setDate}
          picker={datePickerType}
        />
      </div>
      <Spin loading={isLoading}>
        <div className='w-full'>
          <Chart
            chartType='BarChart'
            height='600px'
            data={data(value, typeData, numberData)}
            options={options(titleChart, params)}
          />
        </div>
      </Spin>
    </div>
  )
}

export default OrderChart
