import { NextPage } from 'next'
import Head from 'next/head'
import { YearBrowse } from '@/components/model/year/YearBrowse'
import { getPageTitle } from '@/utils/stringUtils'

const Year: NextPage = () => {
  return (
    <>
      <Head>
        <title>{getPageTitle('Year')}</title>
      </Head>
      <YearBrowse />
    </>
  )
}

export default Year
