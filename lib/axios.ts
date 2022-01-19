import md5 from 'crypto-js/md5.js'
import axios from 'axios'

import { ComicDataWrapper } from '@/entities/model/comic'
import {
  PUBLIC_KEY,
  PRIVATE_KEY,
  API_BASE_URL,
  DISPLAY_COMICS_LIMIT,
} from '@/lib/constants'

export const callMarvelApi = async (params: Record<string, string>) => {
  const ts = Date.now().toString()
  const paramsWithKey = {
    ...params,
    apikey: PUBLIC_KEY,
    hash: md5(ts + PRIVATE_KEY + PUBLIC_KEY).toString(),
    ts,
  }
  const searchParamsWithKey = new URLSearchParams(paramsWithKey).toString()
  const url = new URL(API_BASE_URL)
  url.search = searchParamsWithKey
  const { data } = await axios.get<ComicDataWrapper>(url.toString())
  return data.data
}

const getComicsSearchParams = (year: string, limit: string) => {
  return {
    formatType: 'comic',
    noVariants: 'true',
    dateRange: `${year}-01-01,${year}-12-31`,
    hasDigitalIssue: 'true',
    limit,
    orderBy: 'modified',
  }
}

export const getComics = async (year: string) => {
  const data = await callMarvelApi(
    getComicsSearchParams(year, DISPLAY_COMICS_LIMIT.toString()),
  )
  return data
}
