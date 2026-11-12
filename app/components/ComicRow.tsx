import Link from 'next/link'

type Komik = {
  id: string
  slug: string
  judul: string
  cover_url: string | null
}

export default function ComicRow({ title, items }: { title: string; items: Komik[] }) {
  return (
    <section className="px-5 pt-6">
      <h2 className="font-[family-name:var(--font-chewy)] text-xl">{title}</h2>
      <div className="mt-4 flex gap-4 overflow-x-auto pb-2">
        {items.length === 0 && <p className="text-sm">Belum ada komik.</p>}
        {items.map((k) => (
          <Link key={k.id} href={'/komik/' + k.slug} className="w-36 shrink-0 md:w-44">
            <div className="aspect-[2/3] overflow-hidden rounded-xl bg-[#A9A5A3]">
              {k.cover_url && (
                <img src={k.cover_url} alt={k.judul} className="h-full w-full object-cover" />
              )}
            </div>
            <p className="mt-2 truncate text-sm font-bold">{k.judul}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}
