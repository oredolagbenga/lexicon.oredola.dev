
# ọrọ — lexicon.oredola.dev

Collaborative Yoruba dictionary with human-recorded pronunciation.

Live at **lexicon.oredola.dev** and **oro.oredola.dev** — part of [oredola.dev](https://oredola.dev)

## Stack
Next.js 15 • TypeScript • Prisma • Vercel Postgres • Cloudinary • Tailwind

## Features
- Correct Yoruba orthography: ẹ, ọ, ṣ with tone marks
- Browser recording via MediaRecorder API
- Cloudinary audio storage (fixed URL handling — no double domain prefix)
- Search, category filtering, audio playback

## Run in Codespace (for macOS 10.14)
1. GitHub → Code → Codespaces → Create codespace
2. `cp .env.example .env` and fill DATABASE_URL + Cloudinary
3. `npm install && npx prisma db push && npm run dev`

Built by Oredola Gbenga — oredola.dev
