import dayjs from 'dayjs'
import { dateFormat } from '../constants/constants'

const dateFormatter = (date) => {
  return dayjs(date, dateFormat).format(dateFormat)
}

export default dateFormatter
