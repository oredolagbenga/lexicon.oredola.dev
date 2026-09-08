
import { v2 as cloudinary } from 'cloudinary'
cloudinary.config({ cloud_name: process.env.CLOUDINARY_CLOUD_NAME, api_key: process.env.CLOUDINARY_API_KEY, api_secret: process.env.CLOUDINARY_API_SECRET })
export function getAudioUrl(p: string | null) { if (!p) return null; const t = p.trim(); if (t.startsWith('http://') || t.startsWith('https://')) return t; return t; }
export async function uploadAudio(buffer: Buffer, folder = 'oro/audio') { return new Promise((resolve, reject) => { cloudinary.uploader.upload_stream({ resource_type: 'video', folder, format: 'webm' }, (err, result) => { if (err) reject(err); else resolve(result); }).end(buffer) }) as Promise<any> }
export default cloudinary
