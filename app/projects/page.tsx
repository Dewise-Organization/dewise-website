import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { site } from '@/lib/siteData'

export default function ProjectsPage() {
  return (
    <main>
      <Nav />
      <section className="container py-12">
        <h1 className="text-3xl font-bold">Projects</h1>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.projects.map((p) => (
            <Link key={p.slug} href={`/projects/${p.slug}`} className="block rounded-lg border border-gray-200 p-5 hover:border-sky-300">
              <div className="text-sm uppercase text-emerald-700">{p.kicker}</div>
              <div className="mt-1 text-lg font-semibold">{p.title}</div>
              <p className="mt-2 text-gray-600">{p.summary}</p>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}


