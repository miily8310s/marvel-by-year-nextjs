import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { ComicSummary } from '@/components/model/comic/ComicSummary'
import { Comic } from '@/entities/model/comic'

const testComic: Comic = {
  id: 94162,
  digitalId: 57488,
  title: 'Sample Comic',
  issueNumber: 16,
  variantDescription: '',
  description: 'Hoge fuga Comic!',
  modified: new Date(),
  isbn: '',
  upc: '75960620046701611',
  diamondCode: '',
  ean: '',
  issn: '',
  format: 'Digital Vertical Comic',
  pageCount: 10,
  textObjects: [],
  resourceURI: 'http://gateway.marvel.com/v1/public/comics/94162',
  urls: [
    {
      type: 'detail',
      url: 'http:hoge.com/sample',
    },
    {
      type: 'reader',
      url: 'http:hoge.com/sampleReader',
    },
  ],
  series: {
    name: 'X-Men Unlimited Infinity Comic (2021 - Pres…',
    resourceURI: '',
  },
  variants: [],
  collections: [],
  collectedIssues: [],
  dates: [
    {
      date: new Date(),
      type: 'onsaleDate',
    },
  ],
  prices: [],
  thumbnail: { extension: 'jpg', path: 'http://i.annihil.us/u/pro…' },
  images: [
    {
      extension: 'jpg',
      path: 'hoge',
    },
  ],
  creators: {
    available: 4,
    collectionURI: 'http://gateway.marve…',
    items: [],
    returned: 4,
  },
  characters: {
    available: 0,
    collectionURI: 'http://gateway.marve…',
    items: [],
    returned: 3,
  },
  stories: {
    available: 2,
    collectionURI: 'http://gateway.marve…',
    items: [],
    returned: 2,
  },
  events: {
    available: 0,
    collectionURI: 'http://gateway.marve…',
    items: [],
    returned: 0,
  },
}

describe('ComicSummary', () => {
  test('正常にレンダリングされているか', () => {
    const { getByTestId } = render(<ComicSummary comic={testComic} />)
    expect(getByTestId('comic-title-link')).toHaveAttribute(
      'href',
      'http:hoge.com/sample',
    )
    expect(getByTestId('comic-title-link')).toHaveTextContent('Sample Comic')
    expect(getByTestId('comic-sale-date')).toHaveTextContent('2022-1-4')
    expect(getByTestId('comic-creators')).toHaveTextContent('Unknown')
  })
})
