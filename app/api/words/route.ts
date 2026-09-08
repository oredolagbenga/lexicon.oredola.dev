
import { prisma } from '@/lib/db'
import { NextResponse } from 'next/server'
export const dynamic = 'force-dynamic'
export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const search = searchParams.get('search') || ''
  const category = searchParams.get('category') || ''
  try {
    const words = await prisma.word.findMany({
      where: { status: 'approved', ...(search ? { OR: [{ word: { contains: search, mode: 'insensitive' } }, { meaning: { contains: search, mode: 'insensitive' } }] } : {}), ...(category ? { category } : {}) },
      orderBy: { createdAt: 'desc' }, take: 50,
    })
   const data = words.map((w: any) => ({ ...w, audio_url: w.audioPath }))
    return NextResponse.json({ status: 'success', data })
  } catch (e: any) { return NextResponse.json({ status: 'error', message: e.message, data: [] }) }
}
