import React from 'react'
import { Table } from '../../../components/antd_components'
import { columns } from './orderDetailTableConfig'
const OrderDetailTable = (props) => {
  const { data, loading } = props
  return (
    <Table
      bordered
      columns={columns}
      data={data}
      loading={loading}
      pagination={false}
      scroll={{
        x: 1000,
      }}
    />
  )
}

export default OrderDetailTable
