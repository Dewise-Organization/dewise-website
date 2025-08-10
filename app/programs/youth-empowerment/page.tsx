import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export default function YouthEmpowermentPage() {
  return (
    <main>
      <Nav />
      <section className="container py-12">
        <div className="text-sm uppercase text-sky-700">Youth</div>
        <h1 className="mt-1 text-3xl font-bold">Youth Empowerment</h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700">
          Mentorship, fellowships, scholarships, and training equip youths with skills, networks, and opportunities to
          thrive and contribute to nation-building.
        </p>
      </section>
      <Footer />
    </main>
  )
}


