import React, { useEffect, useState } from 'react'
import { useOutletContext, useParams } from 'react-router-dom'
import { Button, Spin } from '../../components/antd_components'
import { ordersUrl } from '../../constants/baseUrl'
import { getApi } from '../../utilities/handleApi'
import { details } from './help'
import OrderDetailTable from './table/OrderDetailTable'
const OrderDetailPage = () => {
  const { navigate } = useOutletContext()
  const [values, setValues] = useState([])
  const [isLoading, setLoading] = useState(false)
  const { invoice } = useParams()

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      const url = process.env.REACT_APP_BASE_URL + ordersUrl + `/${invoice}`
      const result = await getApi(url)
      setValues(result)
      setLoading(false)
    }
    fetch()
  }, [invoice])
  const renderDetails = (
    <Spin loading={isLoading}>
      <div className='flex sm:flex-row gap-4 w-full'>
        <div className='flex flex-col gap-2 sm:hidden'>
          {details(values).map((item) => (
            <div className='flex flex-col sm:flex-row gap-2'>
              <p className='font-semibold'>{item.title}</p>
              <p className='font-normal'>{item.value}</p>
            </div>
          ))}
        </div>
        <div className='hidden flex-row gap-6 sm:flex'>
          <div className='flex flex-col gap-2'>
            {details(values).map((item) => (
              <p className='font-semibold'>{item.title}</p>
            ))}
          </div>
          <div className='flex flex-col gap-2'>
            {details(values).map((item) => (
              <p className='font-normal'>: {item.value}</p>
            ))}
          </div>
        </div>
      </div>
    </Spin>
  )
  return (
    <div>
      <Button
        text='Kembali'
        onClick={() => navigate(-1)}
        className='mt-4 mx-4 sm:mx-6'
        type='text'
      />
      <div className='flex flex-col gap-6 m-4 p-6 sm:m-6 rounded-xl shadow-lg bg-white'>
        {renderDetails}
        <OrderDetailTable
          data={values.items}
          loading={isLoading}
        />
      </div>
    </div>
  )
}

export default OrderDetailPage
