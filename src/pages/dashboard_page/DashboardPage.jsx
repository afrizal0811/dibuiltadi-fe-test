import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { getToken } from '../../utilities/localStorages'
import OrderChart from './chart/order/OrderChart'
import OrderComparison from './chart/order/order_comparison/OrderComparison'
import TopChart from './chart/top/TopChart'

const DashboardPage = () => {
  const { navigate } = useOutletContext()

  useEffect(() => {
    if (!getToken()) {
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
          urlType='monthly'
          datePickerType='month'
        />
        <OrderChart
          initialDate={['2022', '2024']}
          numberData='amount'
          titleChart='Yearly Order'
          typeData='year'
          urlType='yearly'
          datePickerType='year'
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
