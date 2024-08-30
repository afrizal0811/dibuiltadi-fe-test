import titleCase from '../../../../utilities/titleCase'

export const removeString = (str) => {
  return str.substring(0, str.length - 2)
}

export const data = (value, type, number) => {
  const items = value
    ? value.map((item) => [item[type].toString(), Number(item[number])])
    : []
  return [[titleCase(type), titleCase(number)], ...items]
}

export const options = (title) => {
  return {
    title: title,
    legend: { position: 'top' },
    hAxis: {
      title: 'Orders',
      minValue: 0,
    },
    vAxis: {
      title: 'Month',
    },
  }
}
