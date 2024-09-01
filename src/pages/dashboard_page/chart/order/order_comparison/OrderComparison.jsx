import React, { useEffect, useState } from 'react'
import { Chart } from 'react-google-charts'
import { Spin } from '../../../../../components/antd_components'
import { orderSummaryUrl } from '../../../../../constants/baseUrl'
import { getApi } from '../../../../../utilities/handleApi'
import { data, options } from './help'

const OrderComparison = () => {
  const [value, setValue] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  useEffect(() => {
    setIsLoading(true)
    const fetch = async () => {
      const url =
        process.env.REACT_APP_BASE_URL + orderSummaryUrl + `/comparison`
      const result = await getApi(url)
      setValue(result)
      setIsLoading(false)
    }
    fetch()
  }, [])

  return (
    <div className='w-5/6 md:w-5/12 flex flex-col m-4 p-2 border border-gray-100 rounded-xl shadow-xl bg-white'>
      <Spin loading={isLoading}>
        <div className='w-full'>
          <Chart
            chartType='BarChart'
            height='600px'
            data={data(value)}
            options={options}
          />
        </div>
      </Spin>
    </div>
  )
}

export default OrderComparison
