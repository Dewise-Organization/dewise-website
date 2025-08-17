import Link from 'next/link'
import { site } from '@/lib/siteData'

export function Footer() {
  return (
    <footer className="mt-16 border-t border-gray-200">
      <div className="container py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="text-lg font-semibold text-sky-700">Dewise Foundation</div>
            <p className="mt-2 text-sm text-gray-600">
              Empowering underserved communities through education, clean energy, and climate action.
            </p>
            
            {/* Newsletter Signup */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Stay Updated</h4>
              <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="flex-1 rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                />
                <button className="rounded-md bg-primary px-4 py-2 text-sm text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          <div>
            <div className="text-sm font-semibold uppercase text-gray-700">Explore</div>
            <ul className="mt-2 space-y-1 text-sm">
              <li><Link href="/about" className="hover:text-sky-700">About</Link></li>
              <li><Link href="/programs" className="hover:text-sky-700">Programs</Link></li>
              <li><Link href="/projects" className="hover:text-sky-700">Projects</Link></li>
              <li><Link href="/impact" className="hover:text-sky-700">Impact</Link></li>
            </ul>
          </div>
          
          <div>
            <div className="text-sm font-semibold uppercase text-gray-700">Connect</div>
            <ul className="mt-2 space-y-1 text-sm">
              {site.socials.map((s) => (
                <li key={s.label}><a className="hover:text-sky-700" href={s.href} target="_blank" rel="noreferrer">{s.label}</a></li>
              ))}
            </ul>
          </div>
          
          <div>
            <div className="text-sm font-semibold uppercase text-gray-700">Support</div>
            <p className="mt-2 text-sm text-gray-600">Your donation powers education and energy access.</p>
            <Link href="/donate" className="mt-3 inline-block rounded-md bg-primary px-4 py-2 text-white hover:bg-sky-600">Donate</Link>
          </div>
        </div>
        
        <div className="mt-10 text-center text-sm text-gray-500">© {new Date().getFullYear()} Dewise Foundation. All rights reserved.</div>
      </div>
    </footer>
  )
}


