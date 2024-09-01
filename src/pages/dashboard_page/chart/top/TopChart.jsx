import React, { useEffect, useState } from 'react'
import { Chart } from 'react-google-charts'
import { InputNumber, Spin } from '../../../../components/antd_components'
import { topSummaryUrl } from '../../../../constants/baseUrl'
import { getApi } from '../../../../utilities/handleApi'
import { data, options } from './help'

const TopChart = (props) => {
  const { titleChart, urlType } = props
  const [value, setValue] = useState([])
  const [limit, setLimit] = useState(5)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetch = async () => {
      setIsLoading(true)
      const url =
        process.env.REACT_APP_BASE_URL +
        topSummaryUrl +
        `/${urlType}?limit=${limit}`
      const result = await getApi(url)
      setValue(result.items)
      setIsLoading(false)
    }
    fetch()
  }, [limit, urlType])

  return (
    <div className='w-5/6 md:w-5/12 flex flex-col m-4 p-2 border border-gray-100 rounded-xl shadow-xl bg-white'>
      <div className='w-full -mb-8 pt-2 z-10 flex flex-col gap-1 justify-center items-center'>
        <p className='text-sm font-semibold'>Showed Data</p>
        <InputNumber
          size='large'
          min={1}
          max={50}
          value={limit}
          onChange={setLimit}
        />
      </div>
      <Spin loading={isLoading}>
        <div className='w-full'>
          <Chart
            chartType='BarChart'
            height='600px'
            data={data(value)}
            options={options(titleChart)}
          />
        </div>
      </Spin>
    </div>
  )
}

export default TopChart
