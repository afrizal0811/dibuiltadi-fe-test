import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { getToken } from '../../utilities/localStorages'

const CouponPage = () => {
  const { navigate } = useOutletContext()
  useEffect(() => {
    if (!getToken()) {
      navigate('/login')
    }
    return 
  }, [navigate])
  return <div>CouponPage</div>
}

export default CouponPage
