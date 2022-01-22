import {
  getPageTitle,
  getArrayToLimitedText,
  commaSeparate,
} from '@/utils/stringUtils'

describe('stringUtils', () => {
  test('getPageTitle', () => {
    expect(getPageTitle()).toBe('Home | Marvel Unlimited by Year')
    expect(getPageTitle('Test Comic')).toBe(
      'Test Comic | Marvel Unlimited by Year',
    )
  })
  test('getArrayToLimitedText', () => {
    expect(getArrayToLimitedText([], 1)).toBe('Unknown')
    expect(getArrayToLimitedText(['test'], 1)).toBe('test')
    expect(getArrayToLimitedText(['here', 'now'], 2)).toBe('here and now')
    expect(getArrayToLimitedText(['one', 'two', 'three', 'four'], 3)).toBe(
      'one, two, three and 1 others',
    )
  })
  test('commaSeparate', () => {
    expect(commaSeparate([])).toBe(' and undefined')
    expect(commaSeparate(['hoge', 'fuga'])).toBe('hoge and fuga')
    expect(commaSeparate(['1', '2', '3'])).toBe('1, 2 and 3')
  })
})
