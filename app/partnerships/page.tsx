import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { site } from '@/lib/siteData'
import { ImageWithFallback } from '@/components/ImageWithFallback'

export default function PartnershipsPage() {
  return (
    <main>
      <Nav />
      <section className="container-max section-padding">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-charcoal">Strategic Partnerships</h1>
          <p className="mt-3 max-w-3xl text-lg text-charcoal mx-auto">
            We collaborate with committed organizations, institutions, and individuals to accelerate our impact 
            and create sustainable change across Cameroon.
          </p>
        </div>

        {/* Current Partners */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-charcoal mb-6 text-center">Our Current Partners</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {site.partners.map((partner) => (
              <div key={partner.name} className="card text-center">
                <div className="w-24 h-24 mx-auto mb-4 bg-sand rounded-full flex items-center justify-center border-2 border-gold">
                  <ImageWithFallback 
                    src={partner.logo} 
                    alt={partner.name} 
                    fallback="🏢"
                    className="w-16 h-16 object-contain"
                  />
                </div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">{partner.name}</h3>
                <p className="text-sm text-charcoal mb-4">{partner.description}</p>
                <a 
                  href={partner.website} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sky hover:text-forest font-medium text-sm transition-colors"
                >
                  Visit Website →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership Areas */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-charcoal mb-6 text-center">Partnership Areas</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <div className="card text-center">
              <div className="text-4xl text-forest mb-4">Clean Energy</div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Clean Energy</h3>
              <p className="text-charcoal text-sm">Collaborate on solar installations, energy efficiency, and renewable energy projects.</p>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl text-forest mb-4">Education</div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Education</h3>
              <p className="text-charcoal text-sm">Support youth training programs, scholarships, and educational infrastructure development.</p>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl text-forest mb-4">Climate Action</div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Climate Action</h3>
              <p className="text-charcoal text-sm">Partner on climate resilience, environmental protection, and sustainable development initiatives.</p>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl text-forest mb-4">Healthcare</div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Healthcare</h3>
              <p className="text-charcoal text-sm">Collaborate on health infrastructure, vaccine preservation, and community health programs.</p>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl text-forest mb-4">Youth Empowerment</div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Youth Empowerment</h3>
              <p className="text-charcoal text-sm">Support skills development, entrepreneurship, and leadership training for young people.</p>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl text-forest mb-4">Infrastructure</div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Infrastructure</h3>
              <p className="text-charcoal text-sm">Partner on community infrastructure, technology access, and sustainable development projects.</p>
            </div>
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-charcoal mb-6 text-center">Why Partner With Us?</h2>
          <div className="bg-gradient-to-r from-sand to-cream p-8 rounded-lg border-2 border-gold">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">For Organizations</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-gold">•</span>
                    <span className="text-charcoal">Access to underserved communities across Cameroon</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold">•</span>
                    <span className="text-charcoal">Proven track record of successful project implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold">•</span>
                    <span className="text-charcoal">Local expertise and community relationships</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold">•</span>
                    <span className="text-charcoal">Transparent reporting and impact measurement</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">For Communities</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-gold">•</span>
                    <span className="text-charcoal">Access to innovative solutions and technologies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold">•</span>
                    <span className="text-charcoal">Capacity building and skills development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold">•</span>
                    <span className="text-charcoal">Sustainable development and long-term impact</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-gold">•</span>
                    <span className="text-charcoal">Youth empowerment and leadership opportunities</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Partnership Process */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-charcoal mb-6 text-center">How to Partner With Us</h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="card text-center">
              <div className="text-3xl text-sky mb-3">1</div>
              <h3 className="font-semibold text-charcoal mb-2">Initial Contact</h3>
              <p className="text-charcoal text-sm">Reach out to discuss potential collaboration opportunities.</p>
            </div>
            
            <div className="card text-center">
              <div className="text-3xl text-sky mb-3">2</div>
              <h3 className="font-semibold text-charcoal mb-2">Discussion</h3>
              <p className="text-charcoal text-sm">We'll explore how our missions align and identify collaboration areas.</p>
            </div>
            
            <div className="card text-center">
              <div className="text-3xl text-sky mb-3">3</div>
              <h3 className="font-semibold text-charcoal mb-2">Planning</h3>
              <p className="text-charcoal text-sm">Develop a detailed partnership plan with clear objectives and timelines.</p>
            </div>
            
            <div className="card text-center">
              <div className="text-3xl text-sky mb-3">4</div>
              <h3 className="font-semibold text-charcoal mb-2">Implementation</h3>
              <p className="text-charcoal text-sm">Execute the partnership with regular communication and progress updates.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-sand p-8 rounded-lg border-2 border-gold">
          <h3 className="text-xl font-semibold text-charcoal mb-3">Ready to Partner With Us?</h3>
          <p className="text-charcoal mb-6">
            Let's explore how we can work together to create sustainable change across Cameroon.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Get in Touch
            </a>
            <a href="mailto:infodewise@gmail.com?subject=Partnership Inquiry" className="btn-secondary">
              Email Us
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
