import {
  getPageTitle,
  getArrayToLimitedText,
  commaSeparate,
} from '@/utils/stringUtils'

describe('stringUtils', () => {
  test('getPageTitle', () => {
    expect(getPageTitle()).toBe('Home | Marvel Unlimited by Year')
  })
  test('getArrayToLimitedText', () => {
    expect(getArrayToLimitedText([], 1)).toBe('Unknown')
  })
  test('commaSeparate', () => {
    expect(commaSeparate([])).toBe(' and undefined')
  })
})
