import { Table } from 'antd'
import React from 'react'
import { paginationPosition } from '../../../constants/constants'
const AntdTable = (props) => {
  const { columns, data, pagination, className, loading, bordered, scroll } =
    props
  return (
    <Table
      className={className}
      columns={columns}
      dataSource={data}
      pagination={pagination && { ...pagination, ...paginationPosition }}
      loading={loading}
      bordered={bordered}
      scroll={scroll}
    />
  )
}

export default AntdTable
