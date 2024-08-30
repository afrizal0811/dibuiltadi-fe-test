export const data = (value) => {
  const { current = {}, previous = {} } = value
  return [
    ['Month', 'Amount'],
    [previous.month, Number(previous.amount)],
    [current.month, Number(current.amount)],
  ]
}

export const options = {
  title: 'Order Comparison',
  legend: { position: 'top' },
  hAxis: {
    title: 'Total Amount',
    minValue: 0,
  },
  vAxis: {
    title: 'Month',
  },
}
