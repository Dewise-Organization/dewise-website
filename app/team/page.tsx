import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { site } from '@/lib/siteData'

export default function TeamPage() {
  return (
    <main>
      <Nav />
      <section className="container py-12">
        <h1 className="text-3xl font-bold">Our Team</h1>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {site.team.map((m) => (
            <div key={m.name} className="rounded-lg border border-gray-200 p-5">
              <div className="text-lg font-semibold">{m.name}</div>
              <div className="text-sm text-gray-600">{m.role}</div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}


