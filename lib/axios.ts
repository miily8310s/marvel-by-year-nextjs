import md5 from 'crypto-js/md5.js'
import axios from 'axios'

const PUBLIC_KEY = process.env['MARVEL_PUBLIC_KEY'] as string
const PRIVATE_KEY = process.env['MARVEL_PRIVATE_KEY'] as string

export const client = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public/comics',
})

export const callMarvelApi = async (params: Record<string, string>) => {
  const ts = Date.now().toString()
  const paramsWithKey = {
    ...params,
    apiKey: PUBLIC_KEY,
    hash: md5(ts + PRIVATE_KEY + PUBLIC_KEY).toString(),
    ts,
  }
  const searchParamsWithKey = new URLSearchParams(paramsWithKey).toString()
  await client.get(`/${searchParamsWithKey}`)
}

const getComicsSearchParams = (year: number, offset: string, limit: string) => {
  return {
    formatType: 'comic',
    noVariants: 'true',
    dateRange: `${year}-01-01,${year}-12-31`,
    hasDigitalIssue: 'true',
    limit,
    offset,
    orderBy: 'modified',
  }
}
