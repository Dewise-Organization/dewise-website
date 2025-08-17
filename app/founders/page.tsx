import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { ImageWithFallback } from '@/components/ImageWithFallback'
import { site } from '@/lib/siteData'

export default function FoundersPage() {
  const founders = site.team.filter(member => member.role.toLowerCase().includes('founder') || member.role.toLowerCase().includes('co-founder'))

  return (
    <main>
      <Nav />
      <section className="container-max section-padding">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-charcoal">Our Founders</h1>
          <p className="mt-3 max-w-3xl text-lg text-charcoal mx-auto">
            Meet the visionary leaders who founded Dewise Foundation and continue to drive our mission forward.
            Their passion for community development and sustainable solutions has transformed lives across Cameroon.
          </p>
        </div>

        {/* Founders Grid */}
        <div className="grid gap-12 lg:grid-cols-2 mb-16">
          {founders.map((founder) => (
            <div key={founder.name} className="card-accent">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 bg-sand rounded-full flex items-center justify-center overflow-hidden border-4 border-gold">
                  <ImageWithFallback
                    src={founder.image}
                    alt={founder.name}
                    fallback="👤"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-charcoal">{founder.name}</h2>
                <p className="text-lg text-sky font-medium">{founder.role}</p>
              </div>
              
              <div className="space-y-4">
                <p className="text-charcoal leading-relaxed">{founder.bio}</p>
                
                {founder.achievements && (
                  <div>
                    <h3 className="font-semibold text-charcoal mb-2">Key Achievements</h3>
                    <ul className="space-y-2">
                      {founder.achievements.slice(0, 3).map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-gold">•</span>
                          <span className="text-charcoal text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                {founder.credentials && (
                  <div className="p-3 bg-cream rounded-md border border-sand">
                    <p className="text-xs text-forest font-medium">{founder.credentials}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Founding Story */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-charcoal mb-6 text-center">Our Founding Story</h2>
          <div className="bg-gradient-to-r from-sand to-cream p-8 rounded-lg border-2 border-gold">
            <div className="max-w-4xl mx-auto text-center">
              <p className="text-lg text-charcoal mb-6 leading-relaxed">
                Dewise Foundation was born from a shared vision of creating sustainable change in underserved communities. 
                Our founders recognized the urgent need for innovative solutions to address education gaps, energy poverty, 
                and climate challenges across Cameroon.
              </p>
              <p className="text-charcoal leading-relaxed">
                Starting with humble beginnings in Yaoundé, we've grown into a recognized force for community development, 
                earning international recognition for our innovative approaches to sustainable development and youth empowerment.
              </p>
            </div>
          </div>
        </div>

        {/* Vision and Values */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-charcoal mb-6 text-center">Vision & Values</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card text-center">
              <div className="text-4xl text-forest mb-4">🎯</div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Mission-Driven</h3>
              <p className="text-charcoal text-sm">Every action we take is guided by our mission to empower communities through sustainable solutions.</p>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl text-forest mb-4">🤝</div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Community-First</h3>
              <p className="text-charcoal text-sm">We believe in working with communities, not for them, ensuring sustainable and meaningful impact.</p>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl text-forest mb-4">💡</div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Innovation</h3>
              <p className="text-charcoal text-sm">We continuously seek innovative approaches to address complex community challenges.</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-sand p-8 rounded-lg border-2 border-gold">
          <h3 className="text-xl font-semibold text-charcoal mb-3">Join Our Mission</h3>
          <p className="text-charcoal mb-6">
            Inspired by our founders' vision? Join us in creating sustainable change across Cameroon.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="/donate" className="btn-primary">
              Support Our Work
            </a>
            <a href="/contact" className="btn-secondary">
              Get in Touch
            </a>
            <a href="/team" className="btn-secondary">
              Meet Our Team
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
