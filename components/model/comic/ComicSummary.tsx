import Image from 'next/image'
import { Comic } from '@/entities/model/comic'
import { getArrayToLimitedText } from '@/utils/stringUtils'
import { getSaleDate } from '@/lib/dayjs'

const MAX_DISPLAY_CREATORS_LENGTH = 3

interface ComicSummaryProps {
  comic: Comic
}

export const ComicSummary = ({ comic }: ComicSummaryProps) => {
  const comicDetailLink = comic.urls[0].url
  // sale date
  const comicSale = comic.dates.find((date) => date.type === 'onsaleDate')
  const comicSaleDate = comicSale
    ? getSaleDate(comicSale.date)
    : 'Sale Date: Unknown'
  // creators
  const creators = comic.creators.items.map((item) => item.name)
  const creatorsText = getArrayToLimitedText(
    creators,
    MAX_DISPLAY_CREATORS_LENGTH,
  )
  return (
    <div className="card">
      <a
        href={comicDetailLink}
        target="_blank"
        rel="noreferrer"
        className="card-body flex-none"
      >
        <Image
          src={`${comic.thumbnail.path}/portrait_xlarge.jpg`}
          alt={`${comic.title}-picture`}
          width={200}
          height={250}
        />
      </a>
      <div className="link-primary font-bold px-5 grid">
        <a
          href={comicDetailLink}
          target="_blank"
          rel="noreferrer"
          className="text-center"
        >
          {comic.title}
        </a>
      </div>
      <p className="text-center">{comicSaleDate}</p>
      <p className="px-4">{creatorsText}</p>
    </div>
  )
}
