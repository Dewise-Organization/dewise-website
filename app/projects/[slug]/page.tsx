import { notFound } from 'next/navigation'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { site } from '@/lib/siteData'

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
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="prose max-w-none">
            <p>
              {project.slug === 'wisecool' &&
                'WiseCool is an IoT-enabled solar cooling system that preserves essential medicines and vaccines in rural communities, extending shelf life and reducing waste.'}
              {project.slug === 'wisebox' &&
                'WiseBox provides modular community solar kits to power homes, schools, and small businesses with reliable, renewable energy.'}
              {project.slug === 'solar-bright-minds' &&
                'Solar Bright Minds brings solar installations to schools, enabling digital learning and dependable lighting for improved educational outcomes.'}
            </p>
          </div>
          <div>
            {/* Gallery placeholder - uses global gallery on homepage, per-project could be added later */}
            <div className="rounded-lg bg-gray-50 p-4 text-sm text-gray-600">
              Project photos available on the homepage gallery.
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


