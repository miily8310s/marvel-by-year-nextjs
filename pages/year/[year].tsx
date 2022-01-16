// import { getComics } from 'lib/axios'
import md5 from 'crypto-js/md5.js'
import { GetServerSideProps } from 'next'
import axios from 'axios'

// TODO: 型定義＆api取得部分を外部ファイルへ

interface YearPageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}

const YearPage = ({ data }: YearPageProps) => {
  return (
    <div>
      {data.map((d) => (
        <div key={d.id}>{d.title}</div>
      ))}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (_context) => {
  const PUBLIC_KEY = process.env['MARVEL_PUBLIC_KEY'] as string
  const PRIVATE_KEY = process.env['MARVEL_PRIVATE_KEY'] as string

  const API_BASE_URL = 'https://gateway.marvel.com:443/v1/public/comics'

  const callMarvelApi = async (params: Record<string, string>) => {
    // const ts = Date.now().toString()
    // const ts = new Date().getTime().toString()
    const paramsWithKey = {
      ...params,
      // apiKey: PUBLIC_KEY,
      // hash: md5(ts + PRIVATE_KEY + PUBLIC_KEY).toString(),
      // ts,
    }
    const searchParamsWithKey = new URLSearchParams(paramsWithKey).toString()
    const url = new URL(API_BASE_URL)
    url.search = searchParamsWithKey
    const { data } = await axios.get(url.toString())
    return data
  }

  const getComicsSearchParams = (year: number, limit: string) => {
    const ts = new Date().getTime().toString()
    return {
      ts,
      apikey: PUBLIC_KEY,
      hash: md5(ts + PRIVATE_KEY + PUBLIC_KEY).toString(),
      // formatType: 'comic',
      // noVariants: 'true',
      dateRange: `${year}-01-01,${year}-12-31`,
      // hasDigitalIssue: 'true',
      limit,
      // offset,
      // orderBy: 'modified',
    }
  }

  const { data } = await callMarvelApi(getComicsSearchParams(2021, '10'))

  if (!data) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      data: data.results,
    },
  }
}

export default YearPage
