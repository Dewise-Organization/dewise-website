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

        <div className="mt-8 pt-8 border-t border-sand text-center">
          <p className="text-xs text-cream">
            © 2024 Dewise Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}


