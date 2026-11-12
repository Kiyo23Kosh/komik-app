import { supabase } from '@/lib/supabase'

export default async function BacaChapter({ params }: { params: Promise<{ slug: string, chapter: string }> }) {
  const { chapter } = await params

  const result = await supabase
    .from('chapter')
    .select('id, halaman(*)')
    .eq('nomor', chapter)
    .single()

  const chapterData = result.data

  if (!chapterData) {
    return <div className="p-6">Chapter tidak ditemukan</div>
  }

  const halamanSorted = chapterData.halaman.sort((a: any, b: any) => a.urutan - b.urutan)

  return (
    <div className="flex flex-col items-center bg-black">
      {halamanSorted.map((h: any) => (
        <img key={h.id} src={h.image_url} loading="lazy" className="w-full max-w-2xl" />
      ))}
    </div>
  )
}