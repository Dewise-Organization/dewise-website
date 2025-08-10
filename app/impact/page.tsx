import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export default function ImpactPage() {
  const metrics = [
    { label: 'Youths Trained', value: '500+' },
    { label: 'Communities Reached', value: '20+' },
    { label: 'Solar Installations', value: '15+' },
    { label: 'Years Active', value: 'Since 2021' }
  ]

  return (
    <main>
      <Nav />
      <section className="container py-12">
        <h1 className="text-3xl font-bold">Impact</h1>
        <p className="mt-3 max-w-3xl text-gray-700">
          We measure success by lives improved, opportunities created, and sustainable systems built.
        </p>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {metrics.map((m) => (
            <div key={m.label} className="rounded-lg border border-gray-200 p-6 text-center">
              <div className="text-2xl font-semibold text-sky-700">{m.value}</div>
              <div className="mt-1 text-sm text-gray-600">{m.label}</div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  )
}


