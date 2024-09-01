import React, { useEffect, useState } from 'react'
import { useOutletContext } from 'react-router-dom'
import { Button, Modal } from '../../components/antd_components'
import { couponsUrl } from '../../constants/baseUrl'
import { getApi } from '../../utilities/handleApi'
import { getToken } from '../../utilities/localStorages'
import ModalAddForm from './modal/ModalAddForm'
import CouponTable from './table/CouponTable'

const CouponPage = () => {
  const { navigate } = useOutletContext()
  const [values, setValues] = useState([])
  const [loading, setLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [page, setPage] = useState({
    current: 1,
    pageSize: 10,
  })

  useEffect(() => {
    if (!getToken()) {
      navigate('/login')
    }
    return
  }, [navigate])

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      const url =
        process.env.REACT_APP_BASE_URL +
        couponsUrl +
        `?page=${page.current}&per_page=${page.pageSize}&sort_by=created_at&sort_direction=asc`
      const result = await getApi(url)
      setValues(result)
      setLoading(false)
    }
    fetch()
  }, [page])

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }
  const handlePageChange = (page, pageSize) => {
    setPage((prev) => ({
      ...prev,
      current: page,
      pageSize: pageSize,
    }))
  }

  return (
    <div>
      <Button
        text='Tambah Coupon'
        onClick={() => handleOpenModal(true)}
        className='mt-4 mx-4 sm:mx-6'
        type='text'
      />
      <Modal
        content={<ModalAddForm handleCloseModal={handleCloseModal} />}
        footer={null}
        handleCloseModal={handleCloseModal}
        isModalOpen={isModalOpen}
        title='Input Data Coupon'
      />
      <div className='m-4 p-4 sm:m-6 shadow-lg'>
        <CouponTable
          data={values.items}
          handlePageChange={handlePageChange}
          loading={loading}
          total={values.total}
        />
      </div>
    </div>
  )
}

export default CouponPage
