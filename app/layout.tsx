
import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = { title: 'Oro — Yoruba Lexicon | lexicon.oredola.dev', description: 'Collaborative Yoruba dictionary with human-recorded pronunciation. Part of oredola.dev' }
export default function RootLayout({ children }: { children: React.ReactNode }) { return (<html lang="en"><body className="min-h-screen bg-white text-black antialiased">{children}</body></html>) }
