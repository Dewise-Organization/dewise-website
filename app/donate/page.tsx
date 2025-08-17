import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { site } from '@/lib/siteData'

export default function DonatePage() {
  return (
    <main>
      <Nav />
      <section className="container py-12">
        <h1 className="text-3xl font-bold">Support Our Mission</h1>
        <p className="mt-3 max-w-3xl text-gray-700">
          Your contribution powers education access, clean energy installations, and climate action across communities in
          Cameroon.
        </p>

        {/* Donation Tiers */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Choose Your Impact</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {site.donationTiers.map((tier, index) => (
              <div key={index} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="text-center">
                  <div className="text-3xl font-bold text-sky-600">${tier.amount}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mt-2">{tier.title}</h3>
                  <p className="text-gray-600 text-sm mt-2">{tier.description}</p>
                  <div className="mt-4 p-3 bg-emerald-50 rounded-md">
                    <div className="text-sm font-medium text-emerald-700">{tier.impact}</div>
                  </div>
                  <button className="mt-4 w-full rounded-md bg-primary px-4 py-2 text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                    Donate ${tier.amount}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Custom Amount */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold mb-4">Or Choose Your Own Amount</h3>
          <div className="max-w-md mx-auto">
            <div className="flex gap-3">
              <input 
                type="number" 
                placeholder="Enter amount" 
                className="flex-1 rounded-md border border-gray-300 px-4 py-2 focus:border-sky-500 focus:outline-none focus:ring-2 focus:ring-sky-500"
                min="1"
              />
              <button className="rounded-md bg-primary px-6 py-2 text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                Donate
              </button>
            </div>
          </div>
        </div>

        {/* Alternative Support Options */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">Bank Transfer</h3>
            <p className="text-gray-600 mb-4">Prefer to make a direct bank transfer? Contact us for our banking details.</p>
            <Link href="mailto:infodewise@gmail.com" className="text-sky-600 hover:text-sky-700 font-medium">
              Get Banking Details →
            </Link>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-3">In-Kind Support</h3>
            <p className="text-gray-600 mb-4">Have equipment, materials, or expertise to share? We'd love to discuss partnership opportunities.</p>
            <Link href="/contact" className="text-sky-600 hover:text-sky-700 font-medium">
              Discuss Partnership →
            </Link>
          </div>
        </div>

        {/* Impact Stories */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-8">Your Donations in Action</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {site.testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="text-gray-600 italic mb-4">"{testimonial.quote}"</div>
                <div className="text-sm font-medium text-gray-900">{testimonial.author}</div>
                <div className="text-xs text-gray-500">{testimonial.location}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center bg-sky-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Trust Matters</h3>
          <p className="text-gray-600 mb-6">
            We are committed to transparency and accountability. 100% of your donation goes directly to our programs.
          </p>
          <div className="grid gap-6 sm:grid-cols-3 max-w-2xl mx-auto">
            <div>
              <div className="text-2xl font-bold text-sky-600">100%</div>
              <div className="text-sm text-gray-600">Goes to Programs</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-sky-600">500+</div>
              <div className="text-sm text-gray-600">Lives Impacted</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-sky-600">20+</div>
              <div className="text-sm text-gray-600">Communities Served</div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


