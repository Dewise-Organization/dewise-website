import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { site } from '@/lib/siteData'

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <section className="container py-12">
        <h1 className="text-3xl font-bold text-center mb-12">About Dewise Foundation</h1>
        
        {/* Mission, Values, Vision Section */}
        <div className="grid gap-8 md:grid-cols-3 mb-16">
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-center mb-4">
              <div className="text-4xl mb-3">🎯</div>
              <h2 className="text-xl font-semibold text-gray-900">Mission</h2>
            </div>
            <p className="text-gray-700 text-center">
              To equalize access to opportunities, build capacity, and foster inclusive development through mentorship,
              fellowships, scholarships, and community programs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-center mb-4">
              <div className="text-4xl mb-3">💎</div>
              <h2 className="text-xl font-semibold text-gray-900">Values</h2>
            </div>
            <p className="text-gray-700 text-center">
              Integrity, Innovation, Inclusivity, and Impact. We believe in transparent operations, 
              creative solutions, equal opportunities, and measurable community transformation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <div className="text-center mb-4">
              <div className="text-4xl mb-3">🌟</div>
              <h2 className="text-xl font-semibold text-gray-900">Vision</h2>
            </div>
            <p className="text-gray-700 text-center">
              A Cameroon where every community has access to quality education, clean energy, 
              and sustainable development opportunities, regardless of their background or location.
            </p>
          </div>
        </div>

        {/* Organization Overview */}
        <div className="bg-sky-50 p-8 rounded-lg mb-16">
          <h2 className="text-2xl font-semibold text-center mb-6">Organization Overview</h2>
          <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto">
            Established in 2021 in Yaoundé, Cameroon, Dewise Foundation is a youth-led non-profit advancing social and
            economic empowerment for underserved populations, including internally displaced persons, refugees, and
            underprivileged youths. We focus on education, civic engagement, climate action, and clean energy.
          </p>
        </div>

        {/* Impact Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8">Our Impact</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Youths Trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">20+</div>
              <div className="text-sm text-gray-600">Communities Engaged</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">Solar Installations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">5,000+</div>
              <div className="text-sm text-gray-600">Lives Impacted</div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8">Our Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-sky-200"></div>

            <div className="space-y-8">
              {site.timeline.map((milestone, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-sky-600 rounded-full border-4 border-white shadow-sm"></div>

                  {/* Content */}
                  <div className="ml-16">
                    <div className="text-sm font-semibold text-sky-600">{milestone.year}</div>
                    <h3 className="text-lg font-semibold text-gray-900">{milestone.title}</h3>
                    <p className="text-gray-600">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-center mb-8">Stories of Impact</h2>
          <div className="grid gap-6 md:grid-cols-3">
            {site.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="text-gray-600 italic mb-4">"{testimonial.quote}"</div>
                <div className="text-sm font-medium text-gray-900">{testimonial.author}</div>
                <div className="text-xs text-gray-500">{testimonial.location}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-sky-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Learn More About Our Team</h3>
          <p className="text-gray-600 mb-6">
            Discover the passionate individuals driving change across Cameroon.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="/founders"
              className="rounded-md bg-primary px-6 py-3 text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              Meet Our Founders
            </a>
            <a
              href="/team"
              className="rounded-md border border-sky-200 px-6 py-3 text-sky-700 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
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


