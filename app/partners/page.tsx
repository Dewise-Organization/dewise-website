import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { site } from '@/lib/siteData'

export default function PartnersPage() {
  return (
    <main>
      <Nav />
      <section className="container py-12">
        <h1 className="text-3xl font-bold">Partners</h1>
        <p className="mt-3 max-w-3xl text-gray-700">We collaborate with committed partners to accelerate impact.</p>
        <div className="mt-8 grid grid-cols-2 items-center gap-8 sm:grid-cols-3 md:grid-cols-5">
          {site.partners.map((p) => (
            <div key={p.name} className="rounded-lg border border-gray-200 p-6 text-center text-gray-700">
              {p.name}
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}


