import getCurrentDate from '../utilities/getCurrentDate'

export const formCol = {
  lg: { span: 4 },
  md: { span: 5 },
  sm: { span: 6 },
  xl: { span: 3 },
}

export const paginationPosition = {
  position: ['topRight', 'bottomRight'],
}
export const couponLink = '/coupon'
export const ordersLink = `/orders?sort_by=created_at&sort_direction=asc&start_date=${getCurrentDate()}&end_date=${getCurrentDate()}`

export const YEAR = 'YYYY'
export const YEARMONTH = 'YYYY-MM'
export const YEARMONTHDAY = 'YYYY-MM-DD'
