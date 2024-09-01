import dayjs from 'dayjs'

const dateFormatter = (date, formatter) => {
  return dayjs(date, formatter).format(formatter)
}

export default dateFormatter
