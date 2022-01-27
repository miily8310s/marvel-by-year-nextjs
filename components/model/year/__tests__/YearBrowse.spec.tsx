import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { YearBrowse } from '@/components/model/year/YearBrowse'

/**
 * 存在しないdata-testidに対してはqueryByTestIdを使用する
 * @see https://stackoverflow.com/questions/67897591/react-testing-library-unable-to-find-the-element-with-data-testid
 */
describe('YearBrowse', () => {
  test('各年のボタンが1939から今年まで存在しているか', () => {
    const { queryByTestId, getByTestId } = render(<YearBrowse />)
    expect(queryByTestId('1938-link')).not.toBeInTheDocument()
    expect(getByTestId('1939-link').textContent).toBe('1939')
    expect(getByTestId('2022-link').textContent).toBe('2022')
  })
})
