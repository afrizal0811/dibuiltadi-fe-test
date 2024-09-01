import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Modal, Table } from '../../../components/antd_components'
import ModalViewEditForm from '../modal/ModalViewEditForm'
import { columns } from './couponTableConfig'
import titleCase from '../../../utilities/titleCase'

const CouponTable = (props) => {
  const { data, handlePageChange, loading, total } = props
  const [isModalEditOpen, setIsModalEditOpen] = useState(false)
  const [modalType, setModalType] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  
  const handleOpenEditModal = () => {
    setIsModalEditOpen(true)
  }
  const handleCloseEditModal = () => {
    setIsModalEditOpen(false)
  }

  return (
    <div>
      <Modal
        content={
          <ModalViewEditForm
            modalType={modalType}
            handleCloseModal={handleCloseEditModal}
            searchParams={searchParams}
          />
        }
        footer={null}
        handleCloseModal={handleCloseEditModal}
        isModalOpen={isModalEditOpen}
        title={`${titleCase(modalType)} Coupon Detail`}
      />
      <Table
        bordered
        columns={columns(handleOpenEditModal, setSearchParams, setModalType)}
        data={data}
        loading={loading}
        pagination={{
          total: total,
          onChange: (page, pageSize) => {
            handlePageChange(page, pageSize)
          },
        }}
        scroll={{
          x: 800,
        }}
      />
    </div>
  )
}

export default CouponTable
