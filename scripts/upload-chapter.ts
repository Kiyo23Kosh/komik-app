import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

import { createClient } from '@supabase/supabase-js'
import fs from 'fs'
import path from 'path'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL as string,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
)

async function uploadChapter(komikId: string, nomorChapter: number, folderPath: string) {
  const insertResult = await supabase
    .from('chapter')
    .insert({ komik_id: komikId, nomor: nomorChapter })
    .select()
    .single()

  const chapter = insertResult.data

  const files = fs.readdirSync(folderPath).sort()

  for (let i = 0; i < files.length; i++) {
    const filePath = path.join(folderPath, files[i])
    const fileBuffer = fs.readFileSync(filePath)
    const fileName = komikId + '/' + nomorChapter + '/' + (i + 1) + '.jpg'

    await supabase.storage.from('komik-images').upload(fileName, fileBuffer, {
      contentType: 'image/jpeg'
    })

    const urlResult = supabase.storage.from('komik-images').getPublicUrl(fileName)

    await supabase.from('halaman').insert({
      chapter_id: chapter.id,
      urutan: i + 1,
      image_url: urlResult.data.publicUrl
    })
  }

  console.log('Selesai upload chapter ' + nomorChapter)
}

uploadChapter('19383466-461e-4dee-b1e8-f04c43c3de14', 1, './gambar-chapter-1')