import { InputNumber } from 'antd'
import React, { useEffect, useState } from 'react'
import { Chart } from 'react-google-charts'
import { topSummaryUrl } from '../../../../constants/baseUrl'
import { getApi } from '../../../../utilities/handleApi'
import { data, options } from './help'

const TopProducts = () => {
  const [value, setValue] = useState([])
  const [limit, setLimit] = useState(5)

  useEffect(() => {
    const fetch = async () => {
      const url =
        process.env.REACT_APP_BASE_URL +
        topSummaryUrl +
        `/products?limit=${limit}`
      const result = await getApi(url)
      setValue(result.items)
    }
    fetch()
  }, [limit])

  return (
    <div className='flex flex-col gap-4'>
      <Chart
        chartType='BarChart'
        width='100%'
        height='600px'
        data={data(value)}
        options={options}
      />
      <div>
        <InputNumber
          size='large'
          min={1}
          max={50}
          value={limit}
          onChange={setLimit}
        />
      </div>
    </div>
  )
}

export default TopProducts
