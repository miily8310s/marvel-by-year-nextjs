import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { getComics } from 'lib/axios'

// TODO: 型定義＆api取得部分を外部ファイルへ

interface YearPageProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: any
}

const YearPage = ({ data }: YearPageProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
      {data.map((d) => (
        <div key={d.id} className="">
          <a href={d.urls[0].url} target="_blank" rel="noreferrer">
            <figure className="place-items-center">
              <Image
                src={`${d.thumbnail.path}/portrait_xlarge.jpg`}
                alt={`${d.title}-picture`}
                width={150}
                height={200}
              />
            </figure>
          </a>
          <div className="card-body link-primary font-bold">
            <a href={d.urls[0].url} target="_blank" rel="noreferrer">
              {d.title}
            </a>
          </div>
        </div>
      ))}
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const year = context.params?.year as string
  const { data } = await getComics(year)

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
