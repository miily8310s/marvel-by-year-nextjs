import { publishYears } from '@/utils/yearsUtils'
import { useRouter } from 'next/router'

export const YearBrowse = () => {
  const router = useRouter()
  return (
    <div>
      <h1 className="text-3xl font-mono font-extrabold">Years</h1>
      <p>
        Select a year to see all the comics available on Marvel Unlimited for
        that year.
      </p>
      <ul className="grid grid-cols-6 lg:grid-cols-12 gap-5">
        {publishYears.map((publishYear, index) => (
          <li
            key={`${publishYear}_${index}`}
            data-testid={`${publishYear}-link`}
            className="bg-primary hover:bg-primary-focus h-12 max-w-screen-md rounded-box grid place-items-center p-2 hover:cursor-pointer"
            onClick={() => router.push(`year/${publishYear}`)}
          >
            <a className="font-mono">{publishYear}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
