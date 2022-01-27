import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { CommonLayout } from '@/components/functional/CommonLayout'

describe('CommonLayout', () => {
  test('リンクおよびchildren要素が表示されているか', () => {
    const { getByTestId } = render(
      <CommonLayout>
        <div data-testid="test-id">hoge</div>
      </CommonLayout>,
    )
    expect(getByTestId('top-page')).toHaveAttribute('href', '/')
    expect(getByTestId('year-browse')).toHaveAttribute('href', '/year')
    expect(getByTestId('test-id')).toHaveTextContent('hoge')
  })
})
