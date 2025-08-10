import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import Link from 'next/link'

export default function DonatePage() {
  return (
    <main>
      <Nav />
      <section className="container py-12">
        <h1 className="text-3xl font-bold">Support Our Mission</h1>
        <p className="mt-3 max-w-3xl text-gray-700">
          Your contribution powers education access, clean energy installations, and climate action across communities in
          Cameroon.
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2">
          <a
            href="#"
            className="rounded-lg bg-primary p-6 text-white shadow hover:bg-sky-600"
            aria-label="Donate via provider"
          >
            Donate via Provider (configure)
          </a>
          <Link href="mailto:contact@dewisefoundation.org" className="rounded-lg border border-gray-200 p-6 hover:border-sky-300">
            Prefer a bank transfer or in-kind support? Email us
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  )
}


