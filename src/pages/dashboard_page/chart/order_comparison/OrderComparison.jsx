import React, { useEffect, useState } from 'react'
import { Chart } from 'react-google-charts'
import { orderSummaryUrl } from '../../../../constants/baseUrl'
import { getApi } from '../../../../utilities/handleApi'
import { data, options } from './help'

const OrderComparison = () => {
  const [value, setValue] = useState([])

  useEffect(() => {
    const fetch = async () => {
      const url =
      process.env.REACT_APP_BASE_URL + orderSummaryUrl + `/comparison`
      const result = await getApi(url)
      setValue(result)
    }
    fetch()
  }, [])

  return (
    <div className='flex flex-col gap-4'>
      <Chart
        chartType='BarChart'
        width='100%'
        height='300px'
        data={data(value)}
        options={options}
      />
    </div>
  )
}

export default OrderComparison
