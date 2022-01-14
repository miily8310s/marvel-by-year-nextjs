import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className="hero">
      <Head>
        <title>Home</title>
      </Head>
      <main className="hero min-h-screen">
        <div className="hero-content flex-col">
          <h1 className="text-2xl font-mono font-bold">
            Browse Marvel Unlimited by Year
          </h1>
          <p>
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
          <ul className="grid grid-cols-3 gap-5">
            <li className="grid card bg-secondary rounded-box h-32 place-items-center">
              <a href="#">Browse all years</a>
            </li>
            <li className="grid card bg-secondary rounded-box h-32 place-items-center">
              <a href="#" className="p-2">
                Start at the beginning
              </a>
            </li>
            <li className="grid card bg-secondary rounded-box h-32 place-items-center">
              <a href="#" className="p-2">
                Start at the beginning
              </a>
            </li>
          </ul>
        </div>
      </main>
    </div>
  )
}

export default Home
