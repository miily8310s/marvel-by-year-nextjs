import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { getPageTitle } from '@/utils/stringUtils'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{getPageTitle('Home')}</title>
      </Head>
      <main>
        <div className="hero-content flex-col">
          <h1 className="text-2xl font-mono font-bold">
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
          <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            <li className="grid card bg-secondary rounded-box h-32 place-items-center">
              <Link href="/year" passHref>
                <a className="font-extrabold font-mono">Browse all years</a>
              </Link>
            </li>
            <li className="grid card bg-secondary rounded-box h-32 place-items-center">
              <a href="#" className="p-2 font-extrabold font-mono">
                Start at the beginning
              </a>
            </li>
            <li className="grid card bg-secondary rounded-box h-32 place-items-center">
              <a href="#" className="p-2 font-extrabold font-mono">
                See What&apos;s current
              </a>
            </li>
            <li className="grid card bg-secondary rounded-box h-32 place-items-center">
              <a href="#" className="p-2 font-extrabold font-mono">
                Get a random comic
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Home
