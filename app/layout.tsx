import type { Metadata } from 'next'
import { Nunito, Chewy } from 'next/font/google'
import './globals.css'

const nunito = Nunito({ subsets: ['latin'], variable: '--font-nunito' })
const chewy = Chewy({ subsets: ['latin'], weight: '400', variable: '--font-chewy' })

export const metadata: Metadata = {
  title: 'Cergamin',
  description: 'Baca komik online',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body
        className={`${nunito.variable} ${chewy.variable} bg-[#E1E1EE] font-[family-name:var(--font-nunito)] text-[#2A1F2D]`}
      >
        {children}
      </body>
    </html>
  )
}
