import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { ImageWithFallback } from '@/components/ImageWithFallback'
import { site } from '@/lib/siteData'

export default function TeamPage() {
  return (
    <main>
      <Nav />
      <section className="container py-12">
        <h1 className="text-3xl font-bold">Our Team</h1>
        <p className="mt-3 max-w-3xl text-gray-600">
          Meet the passionate individuals driving change across Cameroon. Our diverse team brings together expertise in 
          technology, community development, and sustainable solutions.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.team.map((m) => (
            <div key={m.name} className="bg-white rounded-lg border border-gray-200 p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-center">
                {/* Team member photo */}
                <div className="w-24 h-24 mx-auto mb-4 bg-sky-100 rounded-full flex items-center justify-center overflow-hidden">
                  <ImageWithFallback 
                    src={m.image} 
                    alt={m.name} 
                    fallback="👤"
                    className="w-24 h-24 rounded-full object-cover"
                  />
                </div>
                
                <div className="text-lg font-semibold text-gray-900">{m.name}</div>
                <div className="text-sm font-medium text-sky-600 mb-3">{m.role}</div>
                <p className="text-sm text-gray-600 leading-relaxed">{m.bio}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Join Our Mission */}
        <div className="mt-16 text-center bg-sky-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Join Our Mission</h2>
          <p className="text-gray-600 mb-6">
            We're always looking for passionate individuals who want to make a difference in communities across Cameroon.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="mailto:infodewise@gmail.com?subject=CV Submission for Dewise Foundation" 
              className="rounded-md bg-primary px-6 py-3 text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              Send Your CV
            </a>
            <a 
              href="/contact" 
              className="rounded-md border border-sky-200 px-6 py-3 text-sky-700 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


