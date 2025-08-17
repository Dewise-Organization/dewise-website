'use client'

import { useState } from 'react'

interface ImageWithFallbackProps {
  src: string
  alt: string
  fallback?: string
  className?: string
  width?: number
  height?: number
}

export function ImageWithFallback({
  src,
  alt,
  fallback = '🖼️',
  className = '',
  width,
  height
}: ImageWithFallbackProps) {
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    setHasError(true)
  }

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}>
        <span className="text-2xl">{fallback}</span>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      onError={handleError}
      loading="eager"
    />
  )
}
