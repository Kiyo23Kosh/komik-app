import Link from 'next/link'

const heading = 'font-[family-name:var(--font-chewy)]'

export default function Welcome() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-10 bg-[#515A94] bg-[radial-gradient(rgba(255,255,255,0.08)_1.5px,transparent_1.5px)] bg-[length:8px_8px] px-6">
      <h1 className={heading + ' text-6xl text-white md:text-8xl'}>Cergamin</h1>
      <div className="flex flex-col items-center gap-4">
        <Link
          href="/"
          className={
            heading + ' rounded-2xl bg-[#FFB400] px-12 py-5 text-2xl text-black shadow-lg'
          }
        >
          Gabung sekarang
        </Link>
        <p className={heading + ' text-white'}>Let&apos;s get started!</p>
      </div>
    </main>
  )
}
