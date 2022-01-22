import { render } from '@testing-library/react'
import { YearBrowse } from '@/components/model/year/YearBrowse'

describe('YearBrouwse', () => {
  test('getPageTitle', () => {
    const { getByText } = render(<YearBrowse />)
    expect(getByText('Years').textContent).toBe('Years')
  })
})
