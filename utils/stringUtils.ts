const APP_TITLE = 'Marvel Unlimited by Year'

// TODO: ページタイトルをstore管理する
export const getPageTitle = (pageTitle = 'Home') => {
  return `${pageTitle} | ${APP_TITLE}`
}

export const getArrayToLimitedText = (array: string[], maxLength: number) => {
  if (array.length === 0) {
    return 'Unknown'
  }
  if (array.length === 1) {
    return array[0]
  }
  if (array.length <= maxLength) {
    return commaSeparate(array)
  }
  const additionalCount = array.length - maxLength
  const limitedText = array.slice(0, maxLength)
  limitedText.push(`${additionalCount} others`)
  return commaSeparate(limitedText)
}

/**
 * 配列を指定した文字で区切った文字列にして返す
 */
export const commaSeparate = (array: string[], spreadChar = ',') => {
  const last = array.pop()
  return array.join(`${spreadChar} `) + ' and ' + last
}
