"use client"
import { useEffect, useState } from 'react'
import { ImageWithFallback } from './ImageWithFallback'

type ImageItem = { src: string; alt: string }

// Helper function to get correct image path based on environment
const getImagePath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/dewise-website' : ''
  return `${basePath}${path}`
}

export function Gallery({ limit }: { limit?: number }) {
  const [images, setImages] = useState<ImageItem[]>([])

  useEffect(() => {
    // Use a curated list of properly named images instead of fetching from JSON
    const curatedImages: ImageItem[] = [
      {
        src: getImagePath('/images/wisebox-youth-training-circle.jpg'),
        alt: 'Youths in circle with Blaise building WiseBoxes'
      },
      {
        src: getImagePath('/images/wisebox-blaise-youth-holding-boxes.jpg'),
        alt: 'Blaise and trained youth holding WiseBoxes'
      },
      {
        src: getImagePath('/images/wisebox-youths-excited-making-boxes.jpg'),
        alt: 'Youths excitedly building WiseBoxes'
      },
      {
        src: getImagePath('/images/dewise-mbua-sunspark-project-team.jpg'),
        alt: 'Dewise and Mboa Hub SunSpark project team'
      },
      {
        src: getImagePath('/images/dewise-mbua-sunspark-project-2.jpg'),
        alt: 'SunSpark energy project in action'
      },
      {
        src: getImagePath('/images/dewise-fellowship-team-2024.jpg'),
        alt: 'Energy Transition Fellowship team 2024'
      },
      {
        src: getImagePath('/images/christian-fellowship-presentation.jpg'),
        alt: 'Christian presenting at fellowship event'
      },
      {
        src: getImagePath('/images/ceo-blaise-christian-certificate.jpg'),
        alt: 'CEO Blaise and Christian with certificate'
      }
    ]
    
    setImages(limit ? curatedImages.slice(0, limit) : curatedImages)
  }, [limit])

  if (!images.length) return (
    <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
      {Array.from({ length: limit ?? 6 }).map((_, i) => (
        <div key={i} className="aspect-[4/3] animate-pulse rounded-md bg-sand" />
      ))}
    </div>
  )

  return (
    <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
      {images.map((img, i) => (
        <div key={i} className="aspect-[4/3] w-full rounded-md overflow-hidden border border-sand">
          <ImageWithFallback
            src={img.src}
            alt={img.alt}
            fallback="📸"
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  )
}


