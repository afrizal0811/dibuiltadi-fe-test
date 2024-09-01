import titleCase from '../../../../utilities/titleCase'

export const data = (value, type, number) => {
  const items = value
    ? value.map((item) => [item[type].toString(), Number(item[number])])
    : []
  return [[titleCase(type), titleCase(number)], ...items]
}

export const options = (title, vTitle) => {
  return {
    title: title,
    colors: ['#BCD1D2'],
    legend: { position: 'top' },
    hAxis: {
      title: 'Orders',
      minValue: 0,
    },
    vAxis: {
      title: titleCase(vTitle),
    },
  }
}
