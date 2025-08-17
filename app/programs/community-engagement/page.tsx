import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { site } from '@/lib/siteData'
import Link from 'next/link'

export default function CommunityEngagementPage() {
  const program = site.focusAreas.find(area => area.slug === 'community')
  
  return (
    <main>
      <Nav />
      <section className="container py-12">
        <div className="text-sm uppercase text-sky-700">{program?.kicker}</div>
        <h1 className="mt-1 text-3xl font-bold">{program?.title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700">
          {program?.desc}
        </p>

        {/* Program Details */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Objectives */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-xl font-semibold text-sky-700 mb-4">Objectives</h2>
            <ul className="space-y-3">
              {program?.objectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-sky-500 mr-2">•</span>
                  <span className="text-gray-700">{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-xl font-semibold text-sky-700 mb-4">Activities</h2>
            <ul className="space-y-3">
              {program?.activities.map((activity, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-sky-500 mr-2">•</span>
                  <span className="text-gray-700">{activity}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h2 className="text-xl font-semibold text-sky-700 mb-4">Impact</h2>
            <ul className="space-y-3">
              {program?.impact.map((impact, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span className="text-gray-700">{impact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-sky-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Ready to Get Involved?</h3>
          <p className="text-gray-600 mb-6">Join us in building resilient communities across Cameroon.</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/donate" className="rounded-md bg-primary px-6 py-3 text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
              Support This Program
            </Link>
            <Link href="/contact" className="rounded-md border border-sky-200 px-6 py-3 text-sky-700 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


