import React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

const Layout = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const context = {
    navigate,
    pathname,
  }

  return (
    <div>
      <Outlet context={context} />
    </div>
  )
}

export default Layout
