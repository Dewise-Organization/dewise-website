"use client"
import { useState } from 'react'
import Link from 'next/link'
import { ImageWithFallback } from './ImageWithFallback'

// Helper function to get correct image path based on environment
const getImagePath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/dewise-website' : ''
  return `${basePath}${path}`
}

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const toggleDropdown = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <nav className="bg-white shadow-sm border-b border-sand">
      <div className="container-max px-6">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="logo-container">
              <ImageWithFallback
                src={getImagePath('/images/dewise-logo.jpg')}
                alt="Dewise Foundation"
                fallback="🏢"
                className="dewise-logo rounded-full shadow-lg border-2 border-gold"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-charcoal hover:text-sky font-medium transition-colors">
              Home
            </Link>
            
            {/* About Dropdown */}
            <div className="relative group">
              <button 
                className="text-charcoal hover:text-sky font-medium transition-colors flex items-center"
                onMouseEnter={() => setActiveDropdown('about')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                About
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-sand py-2 z-50">
                  <Link href="/about" className="block px-4 py-2 text-charcoal hover:bg-sand transition-colors">
                    Mission, Values, Vision
                  </Link>
                  <Link href="/team" className="block px-4 py-2 text-charcoal hover:bg-sand transition-colors">
                    Team
                  </Link>
                  <Link href="/founders" className="block px-4 py-2 text-charcoal hover:bg-sand transition-colors">
                    Founders
                  </Link>
                  <Link href="/partnerships" className="block px-4 py-2 text-charcoal hover:bg-sand transition-colors">
                    Partnerships
                  </Link>
                </div>
              )}
            </div>

            {/* Impact Dropdown */}
            <div className="relative group">
              <button 
                className="text-charcoal hover:text-sky font-medium transition-colors flex items-center"
                onMouseEnter={() => setActiveDropdown('impact')}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                Impact
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeDropdown === 'impact' && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-sand py-2 z-50">
                  <Link href="/programs" className="block px-4 py-2 text-charcoal hover:bg-sand transition-colors">
                    Programs
                  </Link>
                  <Link href="/projects" className="block px-4 py-2 text-charcoal hover:bg-sand transition-colors">
                    Projects
                  </Link>
                </div>
              )}
            </div>
            
            <Link href="/achievements" className="text-charcoal hover:text-sky font-medium transition-colors">
              Achievements
            </Link>
            
            <Link href="/contact" className="text-charcoal hover:text-sky font-medium transition-colors">
              Contact
            </Link>
            
            <Link href="/donate" className="btn-accent">
              Donate
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-charcoal"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-sand">
            <div className="space-y-2">
              <Link href="/" className="block py-2 text-charcoal hover:text-sky font-medium">
                Home
              </Link>
              
              <div className="space-y-2">
                <div className="font-medium text-charcoal py-2">About</div>
                <div className="pl-4 space-y-2">
                  <Link href="/about" className="block py-2 text-charcoal hover:text-sky">
                    Mission, Values, Vision
                  </Link>
                  <Link href="/team" className="block py-2 text-charcoal hover:text-sky">
                    Team
                  </Link>
                  <Link href="/founders" className="block py-2 text-charcoal hover:text-sky">
                    Founders
                  </Link>
                  <Link href="/partnerships" className="block py-2 text-charcoal hover:text-sky">
                    Partnerships
                  </Link>
                </div>
              </div>
              
              <div className="space-y-2">
                <div className="font-medium text-charcoal py-2">Impact</div>
                <div className="pl-4 space-y-2">
                  <Link href="/programs" className="block py-2 text-charcoal hover:text-sky">
                    Programs
                  </Link>
                  <Link href="/projects" className="block py-2 text-charcoal hover:text-sky">
                    Projects
                  </Link>
                </div>
              </div>
              
              <Link href="/achievements" className="block py-2 text-charcoal hover:text-sky font-medium">
                Achievements
              </Link>
              
              <Link href="/contact" className="block py-2 text-charcoal hover:text-sky font-medium">
                Contact
              </Link>
              
              <Link href="/donate" className="block py-2 text-charcoal hover:text-sky font-medium">
                Donate
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}


