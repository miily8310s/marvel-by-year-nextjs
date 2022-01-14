const APP_TITLE = 'Marvel Unlimited by Year'

export const getPageTitle = (pageTitle = 'Home') => {
  return `${pageTitle} | ${APP_TITLE}`
}
