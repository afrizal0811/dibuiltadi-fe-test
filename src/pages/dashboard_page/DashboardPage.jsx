import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { getToken } from '../../utilities/localStorages'
import MonthlyOrders from './chart/monthly_orders/MonthlyOrders'
import OrderComparison from './chart/order_comparison/OrderComparison'
import TopBuyers from './chart/top_buyers/TopBuyers'
import TopProducts from './chart/top_products/TopProducts'
import TopStores from './chart/top_stores/TopStores'
import YearlyOrders from './chart/yearly_orders/YearlyOrders'
const DashboardPage = () => {
  const { navigate } = useOutletContext()

  useEffect(() => {
    if (!getToken()) {
      navigate('/login')
    }
  }, [navigate])

  return (
    <div className='text-center'>
      <h1 className='text-red-500'>DashboardPage </h1>
      <MonthlyOrders />
      <YearlyOrders />
      <OrderComparison />
      <TopProducts />
      <TopBuyers />
      <TopStores />
    </div>
  )
}

export default DashboardPage
