import titleCase from '../../../../utilities/titleCase'

export const data = (value) => {
  const items = value
    ? value.map((item) => [
        titleCase(item.name),
        Number(item.amount.slice(0, -1)),
      ])
    : []
  return [['Name', 'Amount (M)'], ...items]
}

export const options = (title) => {
  return {
    title: title,
    legend: { position: 'top' },
    hAxis: {
      title: 'Amount (M)',
      minValue: 0,
    },
    vAxis: {
      title: 'Name',
    },
  }
}
