import React, { useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'
import { checkValidToken } from '../../utilities/localStorages'
const DashboardPage = () => {
  const { navigate } = useOutletContext()
  useEffect(() => {
    if (!checkValidToken()) {
      navigate('/login')
    }
  }, [navigate])
  
  return (
    <div className='text-center'>
      <h1 className='text-red-500'>DashboardPage </h1>
    </div>
  )
}

export default DashboardPage
