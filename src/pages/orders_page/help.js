export const details = (data) => {
  const coupon = data.coupon?.name
    ? `${data.coupon?.name} (${data.coupon?.code})`
    : '-'

  return [
    {
      title: 'Transaction Date',
      value: data.created_at,
    },
    {
      title: 'Invoice No. ',
      value: data.invoice_no,
    },
    {
      title: 'Buyer Name',
      value: data.buyer?.name,
    },
    {
      title: 'Coupon',
      value: coupon,
    },
    {
      title: 'Grand Total',
      value: Number(data.grandtotal),
    },
  ]
}

export const sortByOptions = [
  {
    label: 'Created Date',
    value: 'created_at',
  },
  {
    label: 'Grand Total',
    value: 'grandtotal',
  },
]

export const sortDirectionOptions = [
  {
    label: 'Desc',
    value: 'desc',
  },
  {
    label: 'Asc',
    value: 'asc',
  },
]
