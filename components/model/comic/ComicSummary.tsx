import Image from 'next/image'
import { Comic } from '@/entities/model/comic'
import { getArrayToLimitedText } from '@/utils/stringUtils'

const MAX_DISPLAY_CREATORS_LENGTH = 3

interface ComicSummaryProps {
  comic: Comic
}

export const ComicSummary = ({ comic }: ComicSummaryProps) => {
  const creators = comic.creators.items.map((item) => item.name)
  // const creatorsCount = creators.length
  const creatorsText = getArrayToLimitedText(
    creators,
    MAX_DISPLAY_CREATORS_LENGTH,
  )
  const comicDetailLink = comic.urls[0].url
  return (
    <div className="card">
      <a
        href={comicDetailLink}
        target="_blank"
        rel="noreferrer"
        className="card-body"
      >
        <Image
          src={`${comic.thumbnail.path}/portrait_xlarge.jpg`}
          alt={`${comic.title}-picture`}
          width={150}
          height={200}
        />
      </a>
      <div className="link-primary font-bold px-5">
        <a href={comicDetailLink} target="_blank" rel="noreferrer">
          {comic.title}
        </a>
      </div>
      <p>{comic.dates[0].date}</p>
      <p>
        <span className="px-5">{creatorsText}</span>
      </p>
    </div>
  )
}
