import Link from 'next/link'
import { site } from '@/lib/siteData'
import { Gallery } from '@/components/Gallery'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <Nav />
      
      {/* Hero Section with Storytelling */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {site.hero.title}
              </h1>
              <p className="mt-4 text-lg text-gray-700">{site.hero.subtitle}</p>
              
              {/* Storytelling Section */}
              <div className="mt-8 rounded-lg bg-white/80 p-6 shadow-sm ring-1 ring-gray-200">
                <h3 className="text-lg font-semibold text-sky-700">{site.hero.story.title}</h3>
                <p className="mt-2 text-gray-700">{site.hero.story.content}</p>
                <p className="mt-2 text-sm font-medium text-emerald-600">{site.hero.story.impact}</p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/about" className="rounded-md bg-primary px-5 py-3 text-white shadow hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                  Learn more
                </Link>
                <Link href="/donate" className="rounded-md border border-sky-200 px-5 py-3 text-sky-700 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                  Donate
                </Link>
              </div>
            </div>
            <div className="rounded-xl bg-white/60 p-2 shadow-sm ring-1 ring-gray-200">
              <Gallery limit={6} />
            </div>
          </div>
        </div>
      </section>

      {/* Revolutionary Addition: International Recognition Section */}
      <section className="bg-gradient-to-r from-yellow-50 to-orange-50">
        <div className="mx-auto max-w-7xl px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{site.hero.recognition.title}</h2>
            <p className="text-lg text-gray-600">Our work is gaining international recognition and transforming lives across Cameroon</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {site.hero.recognition.highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-yellow-200 hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="text-3xl mb-3">🏆</div>
                  <h3 className="font-semibold text-gray-900 text-sm leading-tight">{highlight}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/achievements" className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium">
              View All Achievements
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Focus Areas with Icons and Better Visuals */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="text-2xl font-semibold">Our Focus Areas</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.focusAreas.map((area) => (
            <Link key={area.slug} href={area.href} className="group block rounded-lg border border-gray-200 p-5 hover:border-sky-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all duration-200 hover:shadow-md">
              <div className="text-3xl mb-3">{area.icon}</div>
              <div className="text-sm uppercase text-sky-700">{area.kicker}</div>
              <div className="mt-1 text-lg font-semibold group-hover:text-sky-700">{area.title}</div>
              <p className="mt-2 text-gray-600">{area.desc}</p>
              <div className="mt-3 text-sm text-sky-600 font-medium">Learn more →</div>
            </Link>
          ))}
        </div>
      </section>

      {/* Flagship Projects with Enhanced Visuals */}
      <section className="bg-sky-50">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <h2 className="text-2xl font-semibold">Flagship Projects</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.projects.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="block rounded-lg bg-white p-5 shadow-sm ring-1 ring-gray-200 hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 transition-all duration-200">
                <div className="text-3xl mb-3">{p.icon}</div>
                <div className="text-sm uppercase text-emerald-700">{p.kicker}</div>
                <div className="mt-1 text-lg font-semibold">{p.title}</div>
                <p className="mt-2 text-gray-600">{p.summary}</p>
                
                {/* Before/After Impact */}
                <div className="mt-4 p-3 bg-emerald-50 rounded-md">
                  <div className="text-xs text-emerald-700 font-medium mb-1">Impact:</div>
                  <div className="text-xs text-emerald-600">
                    <span className="line-through">{p.beforeAfter.before}</span>
                    <br />
                    <span className="font-medium">→ {p.beforeAfter.after}</span>
                  </div>
                </div>
                
                <div className="mt-3 text-sm text-emerald-600 font-medium">View project →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Partners Section */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="text-2xl font-semibold">Our Partners</h2>
        <p className="mt-3 text-gray-600">We collaborate with committed partners to accelerate impact.</p>
        <div className="mt-6 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-4">
          {site.partners.map((partner) => (
            <div key={partner.name} className="text-center">
              <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-full flex items-center justify-center text-gray-400">
                {partner.logo ? (
                  <img src={partner.logo} alt={partner.name} className="w-12 h-12 object-contain" />
                ) : (
                  <span className="text-2xl">🏢</span>
                )}
              </div>
              <div className="text-sm font-medium text-gray-700">{partner.name}</div>
              <div className="text-xs text-gray-500 mt-1">{partner.description}</div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-8">
          <Link href="/partnerships" className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium">
            Learn About Our Strategic Partnerships
            <span>→</span>
          </Link>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <div className="text-center">
            <h2 className="text-2xl font-semibold">Stay Connected</h2>
            <p className="mt-3 text-gray-600">Get updates on our projects and impact stories.</p>
            <div className="mt-6 flex max-w-md mx-auto gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 rounded-md border border-gray-300 px-4 py-2 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
              <button className="rounded-md bg-primary px-4 py-2 text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}


