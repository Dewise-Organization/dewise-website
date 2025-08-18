import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { site } from '@/lib/siteData'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <section className="container-max section-padding">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-charcoal">About Dewise Foundation</h1>
          <p className="mt-3 max-w-3xl text-lg text-charcoal mx-auto">
            We are a youth-led non-profit organization advancing social and economic empowerment for underserved populations 
            across Cameroon through innovative solutions in education, clean energy, and climate action.
          </p>
        </div>
        
        {/* Mission, Values, Vision Section */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          <div className="card-accent text-center">
            <div className="text-4xl mb-3 text-forest">Mission</div>
            <h2 className="text-xl font-semibold text-charcoal">Mission</h2>
            <p className="text-charcoal text-center mt-3">
              To equalize access to opportunities, build capacity, and foster inclusive development through mentorship,
              fellowships, scholarships, and community programs.
            </p>
          </div>
          
          <div className="card-accent text-center">
            <div className="text-4xl mb-3 text-forest">Values</div>
            <h2 className="text-xl font-semibold text-charcoal">Values</h2>
            <p className="text-charcoal text-center mt-3">
              Integrity, innovation, community partnership, sustainability, and youth empowerment guide everything we do.
            </p>
          </div>
          
          <div className="card-accent text-center">
            <div className="text-4xl mb-3 text-forest">Vision</div>
            <h2 className="text-xl font-semibold text-charcoal">Vision</h2>
            <p className="text-charcoal text-center mt-3">
              A Cameroon where every community has access to sustainable energy, quality education, and climate resilience.
            </p>
          </div>
        </div>

        {/* Organization Overview */}
        <div className="bg-gradient-to-r from-sand to-cream p-8 rounded-lg border-2 border-gold mb-16">
          <h2 className="text-2xl font-semibold text-center text-charcoal mb-6">Organization Overview</h2>
          <p className="text-lg text-charcoal text-center max-w-4xl mx-auto">
            Established in 2021 in Yaoundé, Cameroon, Dewise Foundation is a youth-led non-profit advancing social and
            economic empowerment for underserved populations, including internally displaced persons, refugees, and
            underprivileged youths. We focus on education, civic engagement, climate action, and clean energy.
          </p>
        </div>

        {/* Impact Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center text-charcoal mb-8">Our Impact</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-sky mb-2">500+</div>
              <div className="text-sm text-charcoal">Youths Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-forest mb-2">20+</div>
              <div className="text-sm text-charcoal">Communities Engaged</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gold mb-2">15+</div>
              <div className="text-sm text-charcoal">Solar Installations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sunset mb-2">5,000+</div>
              <div className="text-sm text-charcoal">Lives Impacted</div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center text-charcoal mb-8">Our Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-sky"></div>

            <div className="space-y-8">
              {site.timeline.map((milestone, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-sky rounded-full border-4 border-white shadow-sm"></div>

                  {/* Content */}
                  <div className="ml-16">
                    <div className="text-sm font-semibold text-sky">{milestone.year}</div>
                    <h3 className="text-lg font-semibold text-charcoal">{milestone.title}</h3>
                    <p className="text-charcoal">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center text-charcoal mb-8">Stories of Impact</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {site.testimonials.map((testimonial, index) => (
              <div key={index} className="card">
                <div className="text-charcoal italic mb-4">"{testimonial.quote}"</div>
                <div className="text-sm font-medium text-charcoal">{testimonial.author}</div>
                <div className="text-xs text-charcoal">{testimonial.location}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-sand p-8 rounded-lg border-2 border-gold">
          <h3 className="text-xl font-semibold text-charcoal mb-3">Learn More About Our Team</h3>
          <p className="text-charcoal mb-6">
            Discover the passionate individuals driving change across Cameroon.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:infodewise@gmail.com?subject=Meet Dewise Foundation Founders"
              className="btn-primary"
            >
              Meet Our Founders
            </a>
            <a
              href="mailto:infodewise@gmail.com?subject=View Dewise Foundation Team"
              className="btn-secondary"
            >
              View Full Team
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


