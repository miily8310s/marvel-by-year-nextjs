import Document, {
  Html,
  Head,
  Main,
  NextScript,
  // DocumentContext,
  // DocumentInitialProps,
} from 'next/document'

class MyDocument extends Document {
  /**
   * @see https://nextjs.org/docs/advanced-features/custom-document
   * @todo ここ不要か確認する
   */
  // static async getInitialProps(
  //   ctx: DocumentContext,
  // ): Promise<DocumentInitialProps> {
  //   const initialProps = await Document.getInitialProps(ctx)
  //   return { ...initialProps }
  // }

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
        <body className="hero  min-h-screen">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
