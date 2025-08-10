import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export default function CommunityEngagementPage() {
  return (
    <main>
      <Nav />
      <section className="container py-12">
        <div className="text-sm uppercase text-sky-700">Community</div>
        <h1 className="mt-1 text-3xl font-bold">Community Engagement</h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700">
          We build resilient communities through civic participation, local development, and inclusive engagement
          programs—supporting IDPs, refugees, and underserved groups to lead change.
        </p>
      </section>
      <Footer />
    </main>
  )
}


