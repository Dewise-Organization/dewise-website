"use client"
import { useEffect, useState } from 'react'

type ImageItem = { src: string; alt: string }

export function Gallery({ limit }: { limit?: number }) {
  const [images, setImages] = useState<ImageItem[]>([])

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch('/images/index.json')
        if (!res.ok) return
        const data: ImageItem[] = await res.json()
        setImages(limit ? data.slice(0, limit) : data)
      } catch (e) {
        // ignore
      }
    }
    load()
  }, [limit])

  if (!images.length) return (
    <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
      {Array.from({ length: limit ?? 6 }).map((_, i) => (
        <div key={i} className="aspect-[4/3] animate-pulse rounded-md bg-gray-100" />
      ))}
    </div>
  )

  return (
    <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
      {images.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.alt}
          loading="lazy"
          className="aspect-[4/3] w-full rounded-md object-cover"
        />
      ))}
    </div>
  )
}


