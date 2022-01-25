import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getPageTitle } from '@/utils/stringUtils'
import {
  YEAR_PATH,
  MIN_PUBLISH_YEAR,
  MAX_PUBLISH_YEAR,
} from '@/utils/yearsUtils'

const Home: NextPage = () => {
  const LINK_BUTTONS = [
    {
      linkPath: `${YEAR_PATH}`,
      displayName: 'Browse all years',
    },
    {
      linkPath: `${YEAR_PATH}/${MIN_PUBLISH_YEAR}`,
      displayName: 'Start at the beginning',
    },
    {
      linkPath: `${YEAR_PATH}/${MAX_PUBLISH_YEAR}`,
      displayName: "See What's current",
    },
  ] as const

  return (
    <>
      <Head>
        <title>{getPageTitle('Home')}</title>
      </Head>
      <main>
        <div className="hero-content flex-col">
          <h1 className="text-3xl font-mono font-extrabold">
            Browse Marvel Unlimited by Year
          </h1>
          <p className="md:max-w-screen-md lg:max-w-screen-lg">
            This site allows you to see what issues are available on Marvel
            Unlimited for a given year. Tap the comic&apos;s cover to be taken
            directly to the comic in Marvel Unlimited or the web-based reader,
            depending on your device.
          </p>
          <p>
            Curious about how I built this? Browse the{' '}
            <a href="#" className="link link-primary">
              source code
            </a>
            .
          </p>
          <ul className="grid md:grid-cols-3 gap-10">
            {LINK_BUTTONS.map(({ linkPath, displayName }, index) => (
              <Link href={linkPath} passHref key={`${displayName}_${index}`}>
                <li className="grid card bg-secondary rounded-box h-32 place-items-center p-2 hover:cursor-pointer">
                  <a className="font-extrabold font-mono">{displayName}</a>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </main>
    </>
  )
}

export default Home
