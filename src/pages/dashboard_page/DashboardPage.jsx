import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { getToken, removeToken } from '../../utilities/localStorages'
import OrderChart from './chart/order/OrderChart'
import OrderComparison from './chart/order/order_comparison/OrderComparison'
import TopChart from './chart/top/TopChart'
import { YEAR, YEARMONTH } from '../../constants/constants'

const DashboardPage = () => {
  const { navigate } = useOutletContext()
  useEffect(() => {
    if (!getToken()) {
      removeToken()
      navigate('/login')
    }
  }, [navigate])

  return (
    <div className='text-center'>
      <h1 className='text-red-500'>DashboardPage</h1>
      <div className='flex flex-wrap gap-4 justify-center items-center'>
        <OrderChart
          initialDate={['2022-01', '2024-08']}
          numberData='orders'
          titleChart='Monthly Order'
          typeData='month'
          formatter={YEARMONTH}
        />
        <OrderChart
          initialDate={['2022', '2024']}
          numberData='amount'
          titleChart='Yearly Order'
          typeData='year'
          formatter={YEAR}
        />
        <OrderComparison />
        <TopChart
          titleChart='Top Buyers'
          urlType='buyers'
        />
        <TopChart
          titleChart='Top Products'
          urlType='products'
        />
        <TopChart
          titleChart='Top Stores'
          urlType='stores'
        />
      </div>
    </div>
  )
}

export default DashboardPage
