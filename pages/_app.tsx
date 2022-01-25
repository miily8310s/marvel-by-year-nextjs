import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { CommonLayout } from '@/components/functional/CommonLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CommonLayout>
      <Component {...pageProps} />
    </CommonLayout>
  )
}

export default MyApp
