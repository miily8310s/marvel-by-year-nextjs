import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html data-theme="cupcake">
        <Head>
          <meta
            property="og:site_name"
            content="Marvel Unlimited by Year for Next.js"
          />
          <meta
            property="og:title"
            content="Home - Marvel Unlimited by Year for Next.js"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="See what issues are available on MU for a given year."
          />
        </Head>
        <body className="min-h-screen m-3">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
