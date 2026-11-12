import { supabase } from '@/lib/supabase'
import Nav from './components/Nav'
import ComicRow from './components/ComicRow'

const heading = 'font-[family-name:var(--font-chewy)]'
const dots =
  'bg-[#515A94] bg-[radial-gradient(rgba(255,255,255,0.08)_1.5px,transparent_1.5px)] bg-[length:8px_8px]'
const chip =
  'flex-1 rounded-full border-2 border-white py-2 text-center text-sm font-bold text-white md:text-base'
const chipActive =
  'flex-1 rounded-full bg-[#FFB400] py-2 text-center text-sm font-bold text-black md:text-base'

export default async function Home() {
  const result = await supabase
    .from('komik')
    .select('*')
    .order('created_at', { ascending: false })

  if (result.error) {
    return <div className="p-6">Gagal ambil data: {result.error.message}</div>
  }

  const komikList = result.data ?? []

  return (
    <div className="min-h-screen pb-24 md:mr-40 md:pb-0">
      <div className={dots + ' pb-8'}>
        <header className="flex items-center justify-center gap-4 rounded-b-[40px] bg-[#515A94] px-4 py-5 shadow-lg">
          <div
            className={
              heading +
              ' flex h-14 w-14 items-center justify-center rounded-xl bg-white/15 text-3xl text-white'
            }
          >
            C
          </div>
          <div className={heading + ' flex rounded-full bg-white p-1.5'}>
            <span className="rounded-full bg-[#FFB400] px-8 py-2">Comic</span>
            <span className="px-8 py-2">Novel</span>
          </div>
        </header>

        <div className="mx-auto mt-5 flex w-[92%] max-w-xl gap-2 rounded-full border border-white/30 bg-white/10 p-2 px-3">
          <span className={chipActive}>Trending</span>
          <span className={chip}>New</span>
          <span className={chip}>Genre</span>
          <span className="rounded-full border-2 border-white px-3 py-2 text-sm font-bold text-white md:px-4 md:text-base">
            All
          </span>
        </div>

        <input
          placeholder="Cari berdasarkan judul"
          className="mx-auto mt-5 block w-[90%] max-w-lg rounded-full border border-black bg-white px-5 py-3 outline-none"
        />
      </div>

      <ComicRow title="Peringkat teratas" items={komikList} />
      <ComicRow title="Chapter baru" items={komikList} />

      <Nav />
    </div>
  )
}
