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
      <div className="container flex responsive-header items-center justify-between px-4">
        <Link href="/" className="logo-container text-lg sm:text-xl font-semibold text-sky-700">
          <ImageWithFallback
            src={getImagePath('/images/dewise-logo.jpg')}
            alt="Dewise Foundation"
            fallback="🏢"
            className="dewise-logo rounded-full shadow-lg border-2 sm:border-4 border-sky-100"
          />
          <span className="text-xl sm:text-2xl lg:text-3xl font-bold">Dewise Foundation</span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-4 sm:gap-6 lg:flex">
          <Link href="/about" className="hover:text-sky-700 text-sm lg:text-base">About</Link>
          <Link href="/programs" className="hover:text-sky-700 text-sm lg:text-base">Programs</Link>
          <Link href="/projects" className="hover:text-sky-700 text-sm lg:text-base">Projects</Link>
          <Link href="/achievements" className="hover:text-sky-700 text-sm lg:text-base">Achievements</Link>
          <Link href="/partnerships" className="hover:text-sky-700 text-sm lg:text-base">Partnerships</Link>
          <Link href="/blog" className="hover:text-sky-700 text-sm lg:text-base">Blog</Link>
          <Link href="/news" className="hover:text-sky-700 text-sm lg:text-base">News</Link>
          <Link href="/team" className="hover:text-sky-700 text-sm lg:text-base">Team</Link>
          <Link href="/partners" className="hover:text-sky-700 text-sm lg:text-base">Partners</Link>
          <Link href="/contact" className="hover:text-sky-700 text-sm lg:text-base">Contact</Link>
          <LanguageSwitcher />
        </nav>
        <Link href="/donate" className="rounded-md bg-primary px-3 sm:px-4 py-2 text-white hover:bg-sky-600 text-sm sm:text-base">
          Donate
        </Link>
      </div>
    </header>
  )
}


