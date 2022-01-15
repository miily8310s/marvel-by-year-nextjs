import { publishYears } from '@/utils/yearsUtils'

export const YearBrowse = () => {
  return (
    <div>
      <h1 className="text-2xl">Years</h1>
      <p>
        Select a year to see all the comics available on Marvel Unlimited for
        that year.
      </p>
      <ul className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
        {publishYears.map((publishYear, index) => (
          <li
            key={`${publishYear}_${index}`}
            className="bg-primary hover:bg-primary-focus h-12 max-w-screen-md rounded-box grid place-items-center p-2 hover:cursor-pointer"
          >
            <a className="font-mono">{publishYear}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}
