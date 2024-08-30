import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { getToken } from '../../utilities/localStorages'

const OrderPage = () => {
  const { navigate } = useOutletContext()
  useEffect(() => {
    if (!getToken()) {
      navigate('/login')
    }
  }, [navigate])

  return <div>OrderPage</div>
}

export default OrderPage
