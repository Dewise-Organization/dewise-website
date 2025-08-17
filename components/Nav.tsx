import Link from 'next/link'
import { LanguageSwitcher } from './LanguageSwitcher'
import { ImageWithFallback } from './ImageWithFallback'

export function Nav() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold text-sky-700">
          <ImageWithFallback 
            src="/images/dewise_logo.jpg" 
            alt="Dewise Foundation" 
            fallback="🏢"
            className="w-8 h-8 rounded-full"
          />
          Dewise Foundation
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-6 sm:flex">
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
        <Link href="/donate" className="rounded-md bg-primary px-4 py-2 text-white hover:bg-sky-600">
          Donate
        </Link>
      </div>
    </header>
  )
}


