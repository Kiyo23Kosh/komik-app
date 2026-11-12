import Link from 'next/link'

function Icon({ children }: { children: React.ReactNode }) {
  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}

const itemClass = 'flex flex-col items-center text-xs md:text-base'

export default function Nav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-10 flex justify-around bg-[#515A94] py-2 text-white md:inset-y-0 md:left-auto md:right-0 md:w-40 md:flex-col-reverse md:justify-start md:gap-14 md:py-10">
      <Link href="/" className={itemClass}>
        <Icon>
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </Icon>
        Home
      </Link>
      <Link href="#" className={itemClass}>
        <Icon>
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </Icon>
        Library
      </Link>
      <Link href="#" className={itemClass}>
        <Icon>
          <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
          <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
        </Icon>
        Inbox
      </Link>
      <Link href="#" className={itemClass}>
        <Icon>
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </Icon>
        More
      </Link>
    </nav>
  )
}
