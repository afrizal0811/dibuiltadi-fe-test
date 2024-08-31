import { Table } from 'antd'
import React from 'react'
const AntdTable = (props) => {
  const { columns, data, pagination, className, loading, bordered, scroll } =
    props
  return (
    <Table
      className={className}
      columns={columns}
      dataSource={data}
      pagination={pagination}
      loading={loading}
      bordered={bordered}
      scroll={scroll}
    />
  )
}

export default AntdTable
