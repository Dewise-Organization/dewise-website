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
  const [isLoading, setIsLoading] = useState(true)

  const handleError = () => {
    setHasError(true)
    setIsLoading(false)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  if (hasError) {
    return (
      <div className={`flex items-center justify-center bg-gray-100 text-gray-400 ${className}`}>
        <span className="text-2xl">{fallback}</span>
      </div>
    )
  }

  return (
    <>
      {isLoading && (
        <div className={`flex items-center justify-center bg-gray-100 animate-pulse ${className}`}>
          <span className="text-gray-400">Loading...</span>
        </div>
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'hidden' : ''}`}
        width={width}
        height={height}
        onError={handleError}
        onLoad={handleLoad}
      />
    </>
  )
}
