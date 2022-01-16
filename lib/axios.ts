import md5 from 'crypto-js/md5.js'
import axios from 'axios'

const PUBLIC_KEY = process.env['MARVEL_PUBLIC_KEY'] as string
const PRIVATE_KEY = process.env['MARVEL_PRIVATE_KEY'] as string

// TODO: refactor

const API_BASE_URL = 'https://gateway.marvel.com/v1/public/comics'

// export const client = axios.create({
//   baseURL: 'https://gateway.marvel.com/v1/public/comics',
// })

export const callMarvelApi = async (params: Record<string, string>) => {
  const ts = Date.now().toString()
  const paramsWithKey = {
    ...params,
    apiKey: PUBLIC_KEY,
    hash: md5(ts + PRIVATE_KEY + PUBLIC_KEY).toString(),
    ts,
  }
  const searchParamsWithKey = new URLSearchParams(paramsWithKey).toString()
  // const { data } = await client.get(`?q=${searchParamsWithKey}`)
  const url = new URL(API_BASE_URL)
  url.search = searchParamsWithKey
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/todos/1',
  )
  // const { data } = await axios.get(`${API_BASE_URL}?q=${searchParamsWithKey}`)
  return data
}

const getComicsSearchParams = (
  year: number,
  _offset: string,
  limit: string,
) => {
  return {
    formatType: 'comic',
    noVariants: 'true',
    // dateRange: `${year}-01-01,${year}-12-31`,
    hasDigitalIssue: 'true',
    limit,
    // offset,
    orderBy: 'modified',
  }
}

export const getComics = async () => {
  const data = await callMarvelApi(getComicsSearchParams(2021, '2021', '10'))
  return data
}
