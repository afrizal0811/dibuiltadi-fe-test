import React from 'react'
import { useOutletContext } from 'react-router-dom'
import { Table } from '../../../components/antd_components'
import { columns } from './ordersTableConfig'

const OrdersTable = (props) => {
  const { data, loading, handlePageChange, total } = props
  const { navigate, pathname } = useOutletContext()

  const handleDetail = (id) => {
    navigate(`${pathname}/${id}`)
  }

  return (
    <Table
      bordered
      columns={columns(handleDetail)}
      data={data}
      loading={loading}
      pagination={{
        total: total,
        onChange: (page, pageSize) => {
          handlePageChange(page, pageSize)
        },
      }}
      scroll={{
        x: 1000,
      }}
    />
  )
}

export default OrdersTable
