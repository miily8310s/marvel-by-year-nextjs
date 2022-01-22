export interface ComicDataWrapper {
  code: number
  status: string
  copyright: string
  attributionText: string
  attributionHTML: string
  data: ComicDataContainer
  etag: string
}

export interface ComicDataContainer {
  offset: number
  limit: number
  total: number
  count: number
  results: Comic[]
}

export interface Comic {
  id: number
  digitalId: number
  title: string
  issueNumber: number
  variantDescription: string
  description: string
  modified: Date
  isbn: string
  upc: string
  diamondCode: string
  ean: string
  issn: string
  format: string
  pageCount: number
  textObjects: TextObject[]
  resourceURI: string
  urls: Url[]
  series: SeriesSummary
  variants: ComicSummary[]
  collections: ComicSummary[]
  collectedIssues: ComicSummary[]
  dates: ComicDate[]
  prices: ComicPrice[]
  thumbnail: Image
  images: Image[]
  creators: CreatorList
  characters: CharacterList
  stories: StoryList
  events: EventList
}

interface TextObject {
  type: string
  language: string
  text: string
}

interface Url {
  type: string
  url: string
}

interface Summary {
  resourceURI: string
  name: string
}

interface Image {
  path: string
  extension: string
}

interface List<T> {
  available: number
  returned: number
  collectionURI: string
  items: T[]
}

type SeriesSummary = Summary

type ComicSummary = Summary

interface ComicDate {
  type: string
  date: Date
}

interface ComicPrice {
  type: string
  price: number
}

type CreatorList = List<CreatorSummary>

interface CreatorSummary extends Summary {
  role: string
}

type CharacterList = List<CharacterSummary>

interface CharacterSummary extends Summary {
  role: string
}

type StoryList = List<StorySummary>

interface StorySummary extends Summary {
  type: string
}

type EventList = List<EventSummary>

type EventSummary = Summary
