import Link from 'next/link'
import { site } from '@/lib/siteData'
import { Gallery } from '@/components/Gallery'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export default function HomePage() {
  return (
    <main>
      <Nav />
      <section className="relative overflow-hidden bg-gradient-to-b from-sky-50 to-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                {site.hero.title}
              </h1>
              <p className="mt-4 text-lg text-gray-700">{site.hero.subtitle}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/about" className="rounded-md bg-primary px-5 py-3 text-white shadow hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                  Learn more
                </Link>
                <Link href="/donate" className="rounded-md border border-sky-200 px-5 py-3 text-sky-700 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                  Donate
                </Link>
              </div>
            </div>
            <div className="rounded-xl bg-white/60 p-2 shadow-sm ring-1 ring-gray-200">
              <Gallery limit={6} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="text-2xl font-semibold">Our Focus Areas</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {site.focusAreas.map((area) => (
            <Link key={area.slug} href={area.href} className="group block rounded-lg border border-gray-200 p-5 hover:border-sky-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
              <div className="text-sm uppercase text-sky-700">{area.kicker}</div>
              <div className="mt-1 text-lg font-semibold group-hover:text-sky-700">{area.title}</div>
              <p className="mt-2 text-gray-600">{area.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-sky-50">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <h2 className="text-2xl font-semibold">Flagship Projects</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.projects.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} className="block rounded-lg bg-white p-5 shadow-sm ring-1 ring-gray-200 hover:shadow focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500">
                <div className="text-sm uppercase text-emerald-700">{p.kicker}</div>
                <div className="mt-1 text-lg font-semibold">{p.title}</div>
                <p className="mt-2 text-gray-600">{p.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="text-2xl font-semibold">Partners</h2>
        <div className="mt-6 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-5">
          {site.partners.map((partner) => (
            <div key={partner.name} className="text-center text-sm text-gray-600">
              {partner.name}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}


