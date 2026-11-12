import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export default async function KomikDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const result = await supabase
    .from('komik')
    .select('*, chapter(*)')
    .eq('slug', slug)
    .single()

  console.log('SLUG DICARI:', slug)
  console.log('DATA:', result.data)
  console.log('ERROR:', result.error)

  const komik = result.data

  if (!komik) {
    return <div className="p-6">Komik tidak ditemukan untuk slug: {slug}</div>
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">{komik.judul}</h1>
      <p>{komik.deskripsi}</p>
      <ul className="mt-4">
        {komik.chapter
          ?.sort((a: any, b: any) => a.nomor - b.nomor)
          .map((ch: any) => (
            <li key={ch.id}>
              <Link href={`/komik/${slug}/${ch.nomor}`}>
                Chapter {ch.nomor} {ch.judul}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  )
}