import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { getApi, apiValidation } from '../../utilities/handleApi'
import { getToken, removeToken } from '../../utilities/localStorages'
import OrderChart from './chart/order/OrderChart'
import OrderComparison from './chart/order/order_comparison/OrderComparison'
import TopChart from './chart/top/TopChart'

const DashboardPage = () => {
  const { navigate } = useOutletContext()
  const [isAuthorized, setIsAuthorized] = useState(null)
  useEffect(() => {
    if (!getToken() || isAuthorized) {
      removeToken()
      navigate('/login')
    }
  }, [navigate, isAuthorized])

  useEffect(() => {
    const fetch = async () => {
      const url = process.env.REACT_APP_BASE_URL + '/auth/profile'
      const result = await getApi(url)
      const isValid = apiValidation(result)
      if (isValid) {
        setIsAuthorized(true)
      } else {
        setIsAuthorized(false)
      }
    }
    fetch()
  }, [])

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
