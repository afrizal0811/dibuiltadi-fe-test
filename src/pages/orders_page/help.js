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
