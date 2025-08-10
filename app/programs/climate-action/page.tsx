import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export default function ClimateActionPage() {
  return (
    <main>
      <Nav />
      <section className="container py-12">
        <div className="text-sm uppercase text-sky-700">Climate</div>
        <h1 className="mt-1 text-3xl font-bold">Climate Change</h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700">
          We promote conservation, environmental education, and community-based adaptation—from tree planting to
          waste-to-energy—building resilience to climate impacts.
        </p>
      </section>
      <Footer />
    </main>
  )
}


