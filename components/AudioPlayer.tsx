
'use client'
import { useRef, useState } from 'react'
function getAudioUrl(p: string | null) { if (!p) return null; const t = p.trim(); if (t.startsWith('http://') || t.startsWith('https://')) return t; return t; }
export default function AudioPlayer({ src }: { src: string | null }) {
  const audioRef = useRef<HTMLAudioElement>(null); const [error, setError] = useState<string | null>(null); const url = getAudioUrl(src)
  if (!url) return <span className="text-xs text-gray-400">No audio</span>
  return (<div className="flex items-center gap-2 bg-gray-50 p-2 rounded-xl"><audio ref={audioRef} controls preload="none" src={url} crossOrigin="anonymous" className="w-full h-8" onError={() => setError('Failed')} />{error && <span className="text-xs text-red-500">{error}</span>}</div>)
}
