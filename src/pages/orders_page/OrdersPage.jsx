import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { Collapse, Table } from '../../components/antd_components'
import { ordersUrl } from '../../constants/baseUrl'
import { getApi } from '../../utilities/handleApi'
import { getToken } from '../../utilities/localStorages'
import FilterComp from './FilterComp'
import { columns } from './tableConfig'

const OrdersPage = () => {
  const { navigate } = useOutletContext()
  const [values, setValues] = useState([])
  const [loading, setLoading] = useState(false)
  const [date, setDate] = useState(['2024-08-31', '2024-08-31'])

  useEffect(() => {
    if (!getToken()) {
      navigate('/login')
    }
  }, [navigate])

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      const url =
        process.env.REACT_APP_BASE_URL +
        ordersUrl +
        `?page=1&per_page=10&sort_by=created_at&sort_direction=desc&buyer_phone=&start_date=${date[0]}&end_date=${date[1]}`
      const result = await getApi(url)
      setValues(result)
      setLoading(false)
    }
    fetch()
  }, [date])

  const handleDetail = (id) => {
    // navigate(`/products/${id}`)
    alert('detail')
  }

  return (
    <div>
      <Collapse
        header='Filter'
        className='m-4 sm:m-6 shadow-lg'
      >
        <FilterComp setDate={setDate} />
      </Collapse>
      <div className='m-4 p-4 sm:m-6 shadow-lg'>
        <Table
          bordered
          columns={columns(handleDetail)}
          data={values.items}
          loading={loading}
          pagination
          scroll={{
            x: 1000,
          }}
        />
      </div>
    </div>
  )
}

export default OrdersPage
