import Link from 'next/link'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ImageWithFallback } from './ImageWithFallback'

// Helper function to get correct image path based on environment
const getImagePath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/dewise-website' : ''
  return `${basePath}${path}`
}

export function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="dynamic-container">
        <div className="dynamic-header">
          <Link href="/" className="dynamic-logo-container">
            <ImageWithFallback
              src={getImagePath('/images/dewise-logo.jpg')}
              alt="Dewise Foundation"
              fallback="🏢"
              className="dynamic-logo shadow-lg border-2 border-sky-100"
            />
            <span className="dynamic-text-large font-bold text-sky-700">Dewise Foundation</span>
          </Link>
          
          <nav className="dynamic-nav">
            <Link href="/about" className="hover:text-sky-700">About</Link>
            <Link href="/programs" className="hover:text-sky-700">Programs</Link>
            <Link href="/projects" className="hover:text-sky-700">Projects</Link>
            <Link href="/achievements" className="hover:text-sky-700">Achievements</Link>
            <Link href="/partnerships" className="hover:text-sky-700">Partnerships</Link>
            <Link href="/blog" className="hover:text-sky-700">Blog</Link>
            <Link href="/news" className="hover:text-sky-700">News</Link>
            <Link href="/team" className="hover:text-sky-700">Team</Link>
            <Link href="/partners" className="hover:text-sky-700">Partners</Link>
            <Link href="/contact" className="hover:text-sky-700">Contact</Link>
            <LanguageSwitcher />
          </nav>
          
          <div className="dynamic-actions">
            <Link href="/donate" className="dynamic-button rounded-md bg-primary text-white hover:bg-sky-600">
              Donate
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}


