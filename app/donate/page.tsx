import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { site } from '@/lib/siteData'

export default function DonatePage() {
  return (
    <main>
      <Nav />
      <section className="container-max section-padding">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-charcoal">Support Our Mission</h1>
          <p className="mt-3 max-w-3xl text-lg text-charcoal mx-auto">
            Your contribution powers education access, clean energy installations, and climate action across communities in
            Cameroon.
          </p>
        </div>

        {/* Donation Tiers */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-charcoal mb-6 text-center">Choose Your Impact</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {site.donationTiers.map((tier, index) => (
              <div key={index} className="card-accent text-center">
                <div className="text-3xl font-bold text-gold mb-2">${tier.amount}</div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">{tier.title}</h3>
                <p className="text-charcoal text-sm mb-4">{tier.description}</p>
                <div className="mb-4 p-3 bg-cream rounded-md border border-gold">
                  <div className="text-sm font-medium text-forest">{tier.impact}</div>
                </div>
                <button className="btn-primary w-full">
                  Donate ${tier.amount}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Amount */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-charcoal mb-6 text-center">Custom Amount</h2>
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input 
                type="number" 
                placeholder="Enter amount" 
                className="flex-1 rounded-lg border border-sand px-4 py-3 focus:border-sky focus:outline-none focus:ring-2 focus:ring-blue-500 text-charcoal"
              />
              <button className="btn-primary">
                Donate
              </button>
            </div>
          </div>
        </div>

        {/* Alternative Support Options */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-charcoal mb-6 text-center">Other Ways to Support</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card text-center">
              <div className="text-4xl text-forest mb-4">Bank Transfer</div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Bank Transfer</h3>
              <p className="text-charcoal text-sm mb-4">Direct bank transfer to our foundation account</p>
              <button className="btn-secondary w-full">Get Details</button>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl text-forest mb-4">In-Kind Support</div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">In-Kind Support</h3>
              <p className="text-charcoal text-sm mb-4">Donate equipment, materials, or services</p>
              <button className="btn-secondary w-full">Learn More</button>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl text-forest mb-4">Volunteer</div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Volunteer</h3>
              <p className="text-charcoal text-sm mb-4">Share your time and expertise with us</p>
              <button className="btn-secondary w-full">Get Involved</button>
            </div>
          </div>
        </div>

        {/* Your Donations in Action */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-charcoal mb-6 text-center">Your Donations in Action</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {site.testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="card">
                <div className="text-charcoal italic mb-4">"{testimonial.quote}"</div>
                <div className="text-sm font-medium text-charcoal">{testimonial.author}</div>
                <div className="text-xs text-charcoal">{testimonial.location}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Your Trust Matters */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-charcoal mb-6 text-center">Your Trust Matters</h2>
          <div className="bg-gradient-to-r from-sand to-cream p-8 rounded-lg border-2 border-gold">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <div className="text-3xl text-gold mb-2">Security</div>
                <h3 className="font-semibold text-charcoal mb-2">Secure Donations</h3>
                <p className="text-sm text-charcoal">All transactions are encrypted and secure</p>
              </div>
              <div>
                <div className="text-3xl text-gold mb-2">Transparency</div>
                <h3 className="font-semibold text-charcoal mb-2">Transparency</h3>
                <p className="text-sm text-charcoal">Regular reports on how your donations are used</p>
              </div>
              <div>
                <div className="text-3xl text-gold mb-2">Impact</div>
                <h3 className="font-semibold text-charcoal mb-2">Direct Impact</h3>
                <p className="text-sm text-charcoal">100% of donations go directly to programs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-sand p-8 rounded-lg border-2 border-gold">
          <h3 className="text-xl font-semibold text-charcoal mb-3">Ready to Make a Difference?</h3>
          <p className="text-charcoal mb-6">
            Every donation, no matter the size, helps us empower communities across Cameroon.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="btn-primary">
              Donate Now
            </button>
            <Link href="/contact" className="btn-secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


