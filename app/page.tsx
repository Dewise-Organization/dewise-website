import Link from 'next/link'
import { site } from '@/lib/siteData'
import { Gallery } from '@/components/Gallery'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { ImageWithFallback } from '@/components/ImageWithFallback'

export default function HomePage() {
  return (
    <main>
      <Nav />
      
      {/* Hero Section with African Design */}
      <section className="relative overflow-hidden bg-gradient-to-b from-sand to-cream">
        <div className="container-max section-padding">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-charcoal sm:text-5xl">
                {site.hero.title}
              </h1>
              <p className="mt-4 text-lg text-charcoal">{site.hero.subtitle}</p>
              
              {/* Storytelling Section */}
              <div className="mt-8 card-accent">
                <h3 className="text-lg font-semibold text-forest">{site.hero.story.title}</h3>
                <p className="mt-2 text-charcoal">{site.hero.story.content}</p>
                <p className="mt-2 text-sm font-medium text-forest">{site.hero.story.impact}</p>
              </div>
              
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/about" className="btn-primary">
                  Learn more
                </Link>
                <Link href="/donate" className="btn-secondary">
                  Donate
                </Link>
              </div>
            </div>
            <div className="rounded-xl bg-white/80 p-2 shadow-sm border border-gold">
              <Gallery limit={6} />
            </div>
          </div>
        </div>
      </section>

      {/* Our Work in Action - African Design */}
      <section className="section-accent">
        <div className="container-max section-padding">
          <h2 className="text-3xl font-bold text-center mb-12 text-charcoal">Our Work in Action</h2>
          
          {/* SunSpark Project */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-forest mb-6">SunSpark Energy Accelerator</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {site.projectImages.sunspark.map((image, index) => (
                <div key={index} className="card">
                  <ImageWithFallback 
                    src={image.src} 
                    alt={image.alt} 
                    fallback=""
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-charcoal">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fellowship Team Images */}
          <div>
            <h3 className="text-xl font-semibold text-forest mb-6">Energy Transition Fellowship 2024</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {site.projectImages.fellowship.map((image, index) => (
                <div key={index} className="card">
                  <ImageWithFallback 
                    src={image.src} 
                    alt={image.alt} 
                    fallback=""
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-charcoal">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* International Recognition Section - African Design */}
      <section className="section-light">
        <div className="container-max section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-charcoal mb-4">{site.hero.recognition.title}</h2>
            <p className="text-lg text-charcoal">Our work is gaining international recognition and transforming lives across Cameroon</p>
          </div>
          
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {site.hero.recognition.highlights.map((highlight, index) => (
              <div key={index} className="card-accent">
                <div className="text-center">
                  <div className="text-3xl mb-3 text-gold">Award</div>
                  <h3 className="font-semibold text-charcoal text-sm leading-tight">{highlight}</h3>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/achievements" className="inline-flex items-center gap-2 text-sky hover:text-forest font-medium">
              View All Achievements
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Focus Areas with African Design */}
      <section className="section-light">
        <div className="container-max section-padding">
          <h2 className="text-2xl font-semibold text-charcoal">Our Focus Areas</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {site.focusAreas.map((area) => (
              <Link key={area.slug} href={area.href} className="card group hover:border-sky transition-all duration-200">
                <div className="text-3xl mb-3 text-forest">{area.title}</div>
                <div className="text-sm uppercase text-sky font-medium">{area.kicker}</div>
                <div className="mt-1 text-lg font-semibold text-charcoal group-hover:text-sky">{area.title}</div>
                <p className="mt-2 text-charcoal">{area.desc}</p>
                <div className="mt-3 text-sm text-sky font-medium">Learn more →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Flagship Projects with African Design */}
      <section className="section-accent">
        <div className="container-max section-padding">
          <h2 className="text-2xl font-semibold text-charcoal">Flagship Projects</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.projects.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="card group">
                <div className="text-3xl mb-3 text-forest">{p.title}</div>
                <div className="text-sm uppercase text-forest font-medium">{p.kicker}</div>
                <div className="mt-1 text-lg font-semibold text-charcoal">{p.title}</div>
                <p className="mt-2 text-charcoal">{p.summary}</p>
                
                {/* Before/After Impact */}
                <div className="mt-4 p-3 bg-cream rounded-md border border-sand">
                  <div className="text-xs text-forest font-medium mb-1">Impact:</div>
                  <div className="text-xs text-charcoal">
                    <span className="line-through">{p.beforeAfter.before}</span>
                    <br />
                    <span className="font-medium">→ {p.beforeAfter.after}</span>
                  </div>
                </div>
                
                <div className="mt-3 text-sm text-forest font-medium">View project →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Partners Section - African Design */}
      <section className="section-light">
        <div className="container-max section-padding">
          <h2 className="text-2xl font-semibold text-charcoal">Our Partners</h2>
          <p className="mt-3 text-charcoal">We collaborate with committed partners to accelerate impact.</p>
          <div className="mt-6 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-4">
            {site.partners.map((partner) => (
              <div key={partner.name} className="text-center">
                <a 
                  href={partner.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-20 h-20 mx-auto mb-3 bg-sand rounded-full flex items-center justify-center hover:bg-gold transition-colors border-2 border-gold"
                >
                  <ImageWithFallback 
                    src={partner.logo} 
                    alt={partner.name} 
                    fallback=""
                    className="w-16 h-16 object-contain"
                  />
                </a>
                <div className="text-sm font-medium text-charcoal">{partner.name}</div>
                <div className="text-xs text-charcoal mt-1">{partner.description}</div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Link href="/partnerships" className="inline-flex items-center gap-2 text-sky hover:text-forest font-medium">
              Learn About Our Strategic Partnerships
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Signup - African Design */}
      <section className="section-accent">
        <div className="container-max section-padding">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-charcoal">Stay Connected</h2>
            <p className="mt-3 text-charcoal">Get updates on our projects and impact stories.</p>
            <div className="mt-6 flex max-w-md mx-auto gap-3">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="flex-1 rounded-lg border border-sand px-4 py-2 focus:border-sky focus:outline-none focus:ring-2 focus:ring-sky text-charcoal"
              />
              <button className="btn-primary">
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


