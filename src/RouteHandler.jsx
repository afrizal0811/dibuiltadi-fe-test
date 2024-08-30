import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import CouponPage from './pages/coupon_page/CouponPage'
import DashboardPage from './pages/dashboard_page/DashboardPage'
import LoginPage from './pages/login_page/LoginPage'
import NotFoundPage from './pages/notfound_page/NotFoundPage'
import OrderPage from './pages/order_page/OrderPage'

const RouteHandler = () => {
  return (
    <Routes>
      <Route
        element={<LoginPage />}
        path='/login'
      />
      <Route element={<Layout />}>
        <Route
          element={<DashboardPage />}
          path='/'
        />
        <Route
          element={<CouponPage />}
          path='/coupon'
        />
        <Route
          element={<OrderPage />}
          path='/order'
        />
        <Route
          element={<NotFoundPage />}
          path='404'
        />
        <Route
          element={
            <Navigate
              replace
              to='404'
            />
          }
          path='*'
        />
      </Route>
    </Routes>
  )
}

export default RouteHandler
