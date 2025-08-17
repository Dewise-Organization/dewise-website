import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { site } from '@/lib/siteData'

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <section className="container py-12">
        <h1 className="text-3xl font-bold">About Dewise Foundation</h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700">
          Established in 2021 in Yaoundé, Cameroon, Dewise Foundation is a youth-led non-profit advancing social and
          economic empowerment for underserved populations, including internally displaced persons, refugees, and
          underprivileged youths. We focus on education, civic engagement, climate action, and clean energy.
        </p>
        
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">Mission</h2>
            <p className="mt-2 text-gray-700">
              To equalize access to opportunities, build capacity, and foster inclusive development through mentorship,
              fellowships, scholarships, and community programs.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Impact</h2>
            <p className="mt-2 text-gray-700">Reaching hundreds of youths and IDPs via training and clean energy access.</p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-8">Our Journey</h2>
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
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-8">Stories of Impact</h2>
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
      </section>
      <Footer />
    </main>
  )
}


