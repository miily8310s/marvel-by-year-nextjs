import Link from 'next/link'
import {
  YEAR_PATH,
  MIN_PUBLISH_YEAR,
  MAX_PUBLISH_YEAR,
} from '@/utils/yearsUtils'

type YearMoveLinkProps = {
  year: number
}

export const YearMoveLink = ({ year }: YearMoveLinkProps) => {
  return (
    <div className=" mt-3">
      <h1 className="text-3xl font-mono font-extrabold">Comic for {year}</h1>
      <div className="mt-2 text-blue-800">
        {year > MIN_PUBLISH_YEAR && (
          <Link href={`${YEAR_PATH}/${year - 1}`} passHref>
            <a className="hover:opacity-50 border-b-2 border-blue-800">
              Previous Year
            </a>
          </Link>
        )}{' '}
        {year < MAX_PUBLISH_YEAR && (
          <Link href={`${YEAR_PATH}/${year + 1}`} passHref>
            <a className="hover:opacity-50 border-b-2 border-blue-800">
              Next Year
            </a>
          </Link>
        )}
      </div>
    </div>
  )
}
