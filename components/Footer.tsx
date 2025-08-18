import Link from 'next/link'
import { site } from '@/lib/siteData'
import { ImageWithFallback } from './ImageWithFallback'

// Helper function to get correct image path based on environment
const getImagePath = (path: string) => {
  const basePath = process.env.NODE_ENV === 'production' ? '/dewise-website' : ''
  return `${basePath}${path}`
}

export function Footer() {
  return (
    <footer className="mt-16 border-t border-sand bg-charcoal text-white">
      <div className="container-max py-10">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="logo-container mb-6">
              <ImageWithFallback
                src={getImagePath('/images/dewise-logo.jpg')}
                alt="Dewise Foundation"
                fallback="🏢"
                className="dewise-logo rounded-full shadow-lg border-2 border-gold"
              />
            </div>
            <p className="mt-2 text-sm text-cream">
              Empowering underserved communities through education, clean energy, and climate action.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm text-cream">
              <li><Link href="/programs/clean-energy" className="hover:text-gold transition-colors">Clean Energy</Link></li>
              <li><Link href="/programs/climate-action" className="hover:text-gold transition-colors">Climate Action</Link></li>
              <li><Link href="/programs/community-engagement" className="hover:text-gold transition-colors">Community Engagement</Link></li>
              <li><Link href="/programs/youth-empowerment" className="hover:text-gold transition-colors">Youth Empowerment</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gold mb-4">Projects</h3>
            <ul className="space-y-2 text-sm text-cream">
              <li><Link href="/projects/wisebox" className="hover:text-gold transition-colors">WiseBox</Link></li>
              <li><Link href="/projects/wisecool" className="hover:text-gold transition-colors">WiseCool</Link></li>
              <li><Link href="/projects/solar-bright-minds" className="hover:text-gold transition-colors">Solar Bright Minds</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-gold mb-4">Connect</h3>
            <ul className="space-y-2 text-sm text-cream">
              <li><Link href="/about" className="hover:text-gold transition-colors">About Us</Link></li>
              <li><Link href="/team" className="hover:text-gold transition-colors">Our Team</Link></li>
              <li><Link href="/careers" className="hover:text-gold transition-colors">Careers</Link></li>
              <li><Link href="/contact" className="hover:text-gold transition-colors">Contact</Link></li>
              <li><Link href="/donate" className="hover:text-gold transition-colors">Donate</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-8 pt-8 border-t border-sand">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gold mb-3">Stay Updated</h3>
            <p className="text-sm text-cream mb-4">Get updates on our projects and impact stories.</p>
            <div className="flex max-w-md mx-auto gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 rounded-lg border border-sand px-4 py-2 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold text-charcoal"
              />
              <button className="bg-gold text-white px-4 py-2 rounded-lg hover:bg-sunset transition-colors focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="mt-8 pt-8 border-t border-sand">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-6">
              {site.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream hover:text-gold transition-colors duration-200 flex flex-col items-center group"
                >
                  <div className="w-10 h-10 bg-sand rounded-full flex items-center justify-center mb-2 group-hover:bg-gold transition-colors">
                    {social.label === 'LinkedIn' && (
                      <svg className="w-5 h-5 text-charcoal" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )}
                    {social.label === 'Facebook' && (
                      <svg className="w-5 h-5 text-charcoal" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )}
                    {social.label === 'Instagram' && (
                      <svg className="w-5 h-5 text-charcoal" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.49.49-1.297.807-2.026.807s-1.536-.317-2.026-.807c-.49-.49-.807-1.297-.807-2.026s.317-1.536.807-2.026c.49-.49 1.297-.807 2.026-.807s1.536.317 2.026.807c.49.49.807 1.297.807 2.026s-.317 1.536-.807 2.026z"/>
                      </svg>
                    )}
                  </div>
                  <span className="text-xs font-medium">{social.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-sand text-center">
          <p className="text-xs text-cream">
            © 2024 Dewise Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}


