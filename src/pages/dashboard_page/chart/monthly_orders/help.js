export const data = (value) => {
  const items = value
    ? value.map((item) => [item.month, Number(item.orders)])
    : []
  return [['Month', 'Orders'], ...items]
}

export const options = {
  title: 'Monthly Order',
  legend: { position: 'top' },
  hAxis: {
    title: 'Orders',
    minValue: 0,
  },
  vAxis: {
    title: 'Month',
  },
}
