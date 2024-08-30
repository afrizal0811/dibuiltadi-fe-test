export const data = (value) => {
  const items = value
    ? value.map((item) => [item.year.toString(), Number(item.amount)])
    : []
  return [['Year', 'Orders'], ...items]
}

export const options = {
  title: 'Yearly Order',
  legend: { position: 'top' },
  hAxis: {
    title: 'Orders',
    minValue: 0,
  },
  vAxis: {
    title: 'Month',
  },
}