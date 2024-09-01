import { Button } from '../../../components/antd_components'
import numberFormatter from '../../../utilities/numberFormatter'
export const columns = (handleDetail) => [
  {
    dataIndex: 'invoice_no',
    key: 'invoiceNo',
    title: 'Invoice No.',
    width: 30,
  },
  {
    dataIndex: ['buyer', 'name'],
    key: 'buyerName',
    title: 'Buyer Name',
    width: 30,
  },
  {
    dataIndex: ['buyer', 'phone'],
    key: 'buyerPhone',
    title: 'Buyer Phone',
    width: 30,
  },
  {
    dataIndex: ['store', 'code'],
    key: 'storeCode',
    title: 'Store Code',
    width: 20,
  },
  {
    dataIndex: ['store', 'name'],
    key: 'storeCode',
    title: 'Store Name',
    width: 25,
  },
  {
    dataIndex: 'grandtotal',
    key: 'grandTotal',
    title: 'Grand Total',
    width: 25,
    render: (text) => numberFormatter(Number(text)),
  },
  {
    key: 'action',
    title: 'Action',
    width: 20,
    fixed: 'right',
    render: (text, record) => (
      <div className='flex justify-center items-center'>
        <Button
          text='View'
          onClick={() => handleDetail(record.invoice_no)}
        />
      </div>
    ),
  },
]
