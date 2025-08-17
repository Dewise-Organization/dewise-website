import { notFound } from 'next/navigation'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { site } from '@/lib/siteData'
import Link from 'next/link'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return site.projects.map((p) => ({ slug: p.slug }))
}

export default function ProjectDetailPage({ params }: Props) {
  const project = site.projects.find((p) => p.slug === params.slug)
  if (!project) return notFound()

  return (
    <main>
      <Nav />
      <section className="container py-12">
        <div className="text-sm uppercase text-emerald-700">{project.kicker}</div>
        <h1 className="mt-1 text-3xl font-bold">{project.title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700">{project.summary}</p>
        
        {/* Project Icon and Overview */}
        <div className="mt-8 flex items-center gap-4">
          <div className="text-4xl">{project.icon}</div>
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Project Overview</h2>
            <p className="text-gray-600">{project.detailedDescription}</p>
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Objectives */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-emerald-700 mb-4">Objectives</h3>
            <ul className="space-y-3">
              {project.objectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span className="text-gray-700">{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-emerald-700 mb-4">Activities</h3>
            <ul className="space-y-3">
              {project.activities.map((activity, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-emerald-500 mr-2">•</span>
                  <span className="text-gray-700">{activity}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
            <h3 className="text-lg font-semibold text-emerald-700 mb-4">Impact</h3>
            <ul className="space-y-3">
              {project.impact.map((impact, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-emerald-500 mr-2">✓</span>
                  <span className="text-gray-700">{impact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Before/After Impact Visualization */}
        <div className="mt-12 bg-emerald-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">Impact Visualization</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg border border-emerald-200">
              <h4 className="font-semibold text-red-600 mb-3">Before</h4>
              <p className="text-gray-700">{project.beforeAfter.before}</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-emerald-200">
              <h4 className="font-semibold text-emerald-600 mb-3">After</h4>
              <p className="text-gray-700">{project.beforeAfter.after}</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-sky-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Support This Project</h3>
          <p className="text-gray-600 mb-6">
            Help us expand {project.title} to reach more communities and create greater impact.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/donate" className="rounded-md bg-primary px-6 py-3 text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
              Donate Now
            </Link>
            <Link href="/contact" className="rounded-md border border-sky-200 px-6 py-3 text-sky-700 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
              Get Involved
            </Link>
          </div>
        </div>

        {/* Related Projects */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6">Other Projects</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.projects
              .filter(p => p.slug !== project.slug)
              .map((p) => (
                <Link key={p.slug} href={`/projects/${p.slug}`} className="block bg-white p-5 rounded-lg border border-gray-200 hover:border-emerald-300 transition-colors">
                  <div className="text-2xl mb-2">{p.icon}</div>
                  <div className="text-sm uppercase text-emerald-700">{p.kicker}</div>
                  <div className="text-lg font-semibold">{p.title}</div>
                  <p className="text-gray-600 text-sm mt-2">{p.summary}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


