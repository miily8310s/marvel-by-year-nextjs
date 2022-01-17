export const MIN_PUBLISH_YEAR = 1939
export const MAX_PUBLISH_YEAR = new Date().getFullYear() + 1

export const publishYears = Array.from(
  Array(MAX_PUBLISH_YEAR - MIN_PUBLISH_YEAR).keys(),
).map((year) => year + MIN_PUBLISH_YEAR)

export const YEAR_PATH = '/year'
