import { Button } from '../../../components/antd_components'

const handleClick = (
  handleOpenModal,
  setSearchParams,
  record,
  setModalType,
  type
) => {
  handleOpenModal(true)
  setSearchParams({
    coupon_code: record.code,
    start_date: record.start_date,
    end_date: record.end_date,
  })
  setModalType(type)
}

export const columns = (handleOpenModal, setSearchParams, setModalType) => [
  {
    dataIndex: 'code',
    key: 'couponCode',
    title: 'Coupon Code',
    width: 25,
  },
  {
    dataIndex: 'name',
    key: 'couponName',
    title: 'Coupon Name',
    width: 25,
  },
  {
    dataIndex: 'start_date',
    key: 'startDate',
    title: 'Start Date',
    width: 25,
  },
  {
    dataIndex: 'end_date',
    key: 'endDate',
    title: 'End Date',
    width: 25,
  },
  {
    key: 'action',
    title: 'Action',
    width: 35,
    fixed: 'right',
    render: (text, record) => (
      <div className='flex justify-center items-center gap-2'>
        <Button
          text='View'
          onClick={() =>
            handleClick(
              handleOpenModal,
              setSearchParams,
              record,
              setModalType,
              'view'
            )
          }
        />
        <Button
          text='Edit'
          name='edit'
          onClick={() =>
            handleClick(
              handleOpenModal,
              setSearchParams,
              record,
              setModalType,
              'edit'
            )
          }
        />
      </div>
    ),
  },
]
