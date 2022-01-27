import { YEAR_PATH } from '@/utils/yearsUtils'
import Link from 'next/link'

interface CommonLayoutProps {
  children: React.ReactNode
}

export const CommonLayout = ({ children }: CommonLayoutProps) => {
  const HEADER_LINK_BUTTONS = [
    {
      linkPath: `/`,
      displayName: 'Top Page',
    },
    {
      linkPath: `${YEAR_PATH}`,
      displayName: 'Year Browse',
    },
  ] as const
  return (
    <div>
      <nav className="flex gap-5 border-b-2 border-blue-900 pb-2 mb-3">
        {HEADER_LINK_BUTTONS.map(({ linkPath, displayName }) => (
          <Link key={displayName} href={linkPath} passHref>
            <a
              data-testid={`${displayName
                .toLocaleLowerCase()
                .split(' ')
                .join('-')}`}
            >
              {displayName}
            </a>
          </Link>
        ))}
      </nav>
      {children}
    </div>
  )
}
