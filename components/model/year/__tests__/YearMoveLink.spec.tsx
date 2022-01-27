import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { YearMoveLink } from '@/components/model/year/YearMoveLink'

const PREVIOUS_ELEMENT = 'previous-year-link'
const NEXT_ELEMENT = 'next-year-link'

describe('YearMoveLink', () => {
  test('1939年だったときprevious yearボタンだけ存在していないか', () => {
    const { queryByTestId, getByTestId } = render(<YearMoveLink year={1939} />)
    expect(getByTestId('year-title')).toHaveTextContent('Comic for 1939')
    expect(queryByTestId(PREVIOUS_ELEMENT)).not.toBeInTheDocument()
    expect(getByTestId(NEXT_ELEMENT)).toHaveTextContent('Next Year')
    expect(getByTestId(NEXT_ELEMENT)).toHaveAttribute('href', '/year/1940')
  })
  test('1940年だったときprevious year/next yearボタン両方存在しているか', () => {
    const { getByTestId } = render(<YearMoveLink year={1940} />)
    expect(getByTestId(PREVIOUS_ELEMENT)).toHaveTextContent('Previous Year')
    expect(getByTestId(PREVIOUS_ELEMENT)).toHaveAttribute('href', '/year/1939')
    expect(getByTestId(NEXT_ELEMENT)).toHaveTextContent('Next Year')
    expect(getByTestId(NEXT_ELEMENT)).toHaveAttribute('href', '/year/1941')
  })
})
