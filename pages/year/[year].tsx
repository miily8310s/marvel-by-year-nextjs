import { GetServerSideProps } from 'next'
import { getComics } from '@/lib/axios'
import { Comic } from '@/entities/model/comic'
import { ComicSummary } from '@/components/model/comic/ComicSummary'

interface YearPageProps {
  comics: Comic[]
}

const YearPage = ({ comics }: YearPageProps) => {
  return (
    <div className="grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
      {comics.length < 1 ?? <div>Nothing to show</div>}
      {comics.map((comic) => (
        <ComicSummary comic={comic} key={comic.id} />
      ))}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const year = context.params?.year as string
  const { results } = await getComics(year)

  if (!results) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      comics: results,
    },
  }
}

export default YearPage
