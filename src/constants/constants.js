import getCurrentDate from '../utilities/getCurrentDate'

export const formCol = {
  lg: { span: 4 },
  md: { span: 5 },
  sm: { span: 6 },
  xl: { span: 3 },
}

export const ordersLink = `/orders?sort_by=created_at&sort_direction=asc&start_date=${getCurrentDate()}&end_date=${getCurrentDate()}`
