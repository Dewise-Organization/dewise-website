import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export default function AboutPage() {
  return (
    <main>
      <Nav />
      <section className="container py-12">
        <h1 className="text-3xl font-bold">About Dewise Foundation</h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700">
          Established in 2021 in Yaoundé, Cameroon, Dewise Foundation is a youth-led non-profit advancing social and
          economic empowerment for underserved populations, including internally displaced persons, refugees, and
          underprivileged youths. We focus on education, civic engagement, climate action, and clean energy.
        </p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">Mission</h2>
            <p className="mt-2 text-gray-700">
              To equalize access to opportunities, build capacity, and foster inclusive development through mentorship,
              fellowships, scholarships, and community programs.
            </p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">Impact</h2>
            <p className="mt-2 text-gray-700">Reaching hundreds of youths and IDPs via training and clean energy access.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


