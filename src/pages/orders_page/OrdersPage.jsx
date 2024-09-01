import React, { useEffect, useState } from 'react'
import { useOutletContext, useSearchParams } from 'react-router-dom'
import { Collapse, Spin } from '../../components/antd_components'
import { ordersUrl } from '../../constants/baseUrl'
import { getApi } from '../../utilities/handleApi'
import { getToken, removeToken } from '../../utilities/localStorages'
import FilterComp from './FilterComp'
import OrdersTable from './table/OrdersTable'
const OrdersPage = () => {
  const { navigate } = useOutletContext()
  const [searchParams, setSearchParams] = useSearchParams()
  const [values, setValues] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState({
    current: 1,
    pageSize: 10,
  })
  const startDate = searchParams.get('start_date')
  const endDate = searchParams.get('end_date')
  const sortBy = searchParams.get('sort_by')
  const sortDirection = searchParams.get('sort_direction')
  const invoiceNo = searchParams.get('invoice_no')
  const buyerPhone = searchParams.get('buyer_phone')
  const storeCode = searchParams.get('store_code')

  useEffect(() => {
    if (!getToken()) {
      removeToken()
      navigate('/login')
    }
  }, [navigate])

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      let url =
        process.env.REACT_APP_BASE_URL +
        ordersUrl +
        `?page=${page.current}&per_page=${page.pageSize}&sort_by=${sortBy}&sort_direction=${sortDirection}&start_date=${startDate}&end_date=${endDate}`
      if (invoiceNo) {
        url += `&search_by=invoice_no&search_query=${invoiceNo}`
      }
      if (buyerPhone) {
        url += `&buyer_phone=${buyerPhone}`
      }
      if (storeCode) {
        url += `&store_code=${storeCode}`
      }
      const result = await getApi(url)
      setValues(result)
      setLoading(false)
    }
    fetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, searchParams])

  const handlePageChange = (page, pageSize) => {
    setPage((prev) => ({
      ...prev,
      current: page,
      pageSize: pageSize,
    }))
  }

  return (
    <div>
      <Spin loading={loading}>
        <Collapse
          header='Filter'
          className='m-4 sm:m-6 shadow-lg bg-white rounded-xl'
        >
          <FilterComp
            searchParams={searchParams}
            setSearchParams={setSearchParams}
          />
        </Collapse>
      </Spin>
      <div className='m-4 p-4 sm:m-6 shadow-lg bg-white rounded-xl'>
        <OrdersTable
          data={values.items}
          loading={loading}
          handlePageChange={handlePageChange}
          total={values.total}
        />
      </div>
    </div>
  )
}

export default OrdersPage
