import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { site } from '@/lib/siteData'

export default function ProgramsPage() {
  return (
    <main>
      <Nav />
      <section className="container py-12">
        <h1 className="text-3xl font-bold">Programs</h1>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.focusAreas.map((area) => (
            <Link key={area.slug} href={area.href} className="block rounded-lg border border-gray-200 p-5 hover:border-sky-300">
              <div className="text-sm uppercase text-sky-700">{area.kicker}</div>
              <div className="mt-1 text-lg font-semibold">{area.title}</div>
              <p className="mt-2 text-gray-600">{area.desc}</p>
            </Link>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}


