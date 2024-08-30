import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import NavigationBar from './components/navigation_bar/NavigationBar'

const Layout = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const context = {
    navigate,
    pathname,
  }

  return (
    <div>
      <NavigationBar context={context} />
      <Outlet context={context} />
    </div>
  )
}

export default Layout
