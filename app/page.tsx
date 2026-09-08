
import AudioPlayer from '@/components/AudioPlayer'
import { prisma } from '@/lib/db'
export const dynamic = 'force-dynamic'
async function getWords() { try { const words = await prisma.word.findMany({ where: { status: 'approved' }, orderBy: { createdAt: 'desc' }, take: 12 }); return words; } catch { return [] } }
export default async function Home() {
  const words = await getWords()
  return (
    <main className="max-w-6xl mx-auto p-6">
      <header className="py-16">
        <h1 className="text-6xl font-black tracking-tight">ọrọ<span className="text-green-600">.</span></h1>
        <p className="text-2xl text-gray-700 mt-3">Collaborative Yoruba dictionary with human audio.</p>
        <p className="mt-4 max-w-xl text-gray-500">Built for native speakers and learners. Correct tone-marking for ẹ, ọ, ṣ. Record, review, and share pronunciation. Part of oredola.dev</p>
        <div className="mt-8 flex gap-3">
          <a href="https://oredola.dev" className="px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium">oredola.dev →</a>
          <a href="/api/words" className="px-5 py-2.5 border rounded-full text-sm">Public API</a>
        </div>
      </header>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {words.length === 0 && (<div className="col-span-3 p-12 border border-dashed rounded-[24px] text-center text-gray-400">No words yet — connect DATABASE_URL and run prisma db push to start.</div>)}
        {words.map(w => (<div key={w.id} className="border rounded-[20px] p-5 hover:shadow-xl transition-all"><div className="flex justify-between"><div><div className="word-title">{w.word}</div><div className="toned-word">{w.tonedWord}</div></div><span className="badge-category">{w.category || 'General'}</span></div><div className="mt-3 text-sm text-gray-700">{w.meaning}</div><div className="mt-4"><AudioPlayer src={w.audioPath} /></div></div>))}
      </section>
      <footer className="mt-24 text-sm text-gray-400">© 2026 oredola.dev — Oro. Built with Next.js 15 + Prisma + Cloudinary</footer>
    </main>
  )
}
