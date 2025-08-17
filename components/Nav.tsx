'use client'

import Link from 'next/link'
import { useState } from 'react'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ImageWithFallback } from './ImageWithFallback'

// Helper function to get correct image path based on environment
const getImagePath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/dewise-website' : ''
  return `${basePath}${path}`
}

export function Nav() {
  const [isAboutOpen, setIsAboutOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container">
        <div className="professional-header">
          <Link href="/" className="logo-container">
            <ImageWithFallback
              src={getImagePath('/images/dewise-logo.jpg')}
              alt="Dewise Foundation"
              fallback="🏢"
              className="dewise-logo rounded-full shadow-lg border-2 border-sky-100"
            />
          </Link>
          
          <nav className="professional-nav">
            {/* About Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsAboutOpen(!isAboutOpen)}
                onMouseEnter={() => setIsAboutOpen(true)}
                className="hover:text-sky-700 flex items-center gap-1 px-3 py-2 rounded-md hover:bg-sky-50 transition-colors"
              >
                About
                <svg className={`w-4 h-4 transition-transform ${isAboutOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {isAboutOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg border border-gray-200 py-2 z-50"
                  onMouseLeave={() => setIsAboutOpen(false)}
                >
                  <Link href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-700">
                    Mission, Values, Vision
                  </Link>
                  <Link href="/team" className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-700">
                    Team
                  </Link>
                  <Link href="/founders" className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-700">
                    Founders
                  </Link>
                  <Link href="/partnerships" className="block px-4 py-2 text-sm text-gray-700 hover:bg-sky-50 hover:text-sky-700">
                    Partners
                  </Link>
                </div>
              )}
            </div>

            <Link href="/programs" className="hover:text-sky-700">Programs</Link>
            <Link href="/projects" className="hover:text-sky-700">Projects</Link>
            <Link href="/achievements" className="hover:text-sky-700">Achievements</Link>
            <Link href="/blog" className="hover:text-sky-700">Blog</Link>
            <Link href="/news" className="hover:text-sky-700">News</Link>
            <Link href="/contact" className="hover:text-sky-700">Contact</Link>
            <LanguageSwitcher />
          </nav>
          
          <Link href="/donate" className="rounded-md bg-primary px-4 py-2 text-white hover:bg-sky-600">
            Donate
          </Link>
        </div>
      </div>
    </header>
  )
}


