import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export default function CleanEnergyPage() {
  return (
    <main>
      <Nav />
      <section className="container py-12">
        <div className="text-sm uppercase text-sky-700">Energy</div>
        <h1 className="mt-1 text-3xl font-bold">Clean Energy</h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700">
          From solar installations for schools and health centers to WiseBox community kits, we expand equitable access
          to reliable, renewable energy.
        </p>
      </section>
      <Footer />
    </main>
  )
}


