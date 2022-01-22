import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc.js'

dayjs.extend(utc)

export const getSaleDate = (saleDate: Date) => {
  const fetchDate = dayjs.utc(saleDate)
  return `${fetchDate.year()}-${fetchDate.month() + 1}-${fetchDate.day()}`
}
