import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import CouponPage from './pages/coupon_page/CouponPage'
import DashboardPage from './pages/dashboard_page/DashboardPage'
import LoginPage from './pages/login_page/LoginPage'
import NotFoundPage from './pages/notfound_page/NotFoundPage'
import OrdersPage from './pages/orders_page/OrdersPage'
import OrderDetailPage from './pages/orders_page/OrderDetailPage'

const RouteHandler = () => {
  return (
    <Routes>
      <Route
        element={<LoginPage />}
        path='/login'
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
          element={<OrdersPage />}
          path='/orders'
        />
        <Route
          element={<OrderDetailPage />}
          path='/orders/:invoice'
        />
      </Route>
    </Routes>
  )
}

export default RouteHandler
