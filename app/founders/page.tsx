import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { ImageWithFallback } from '@/components/ImageWithFallback'
import { site } from '@/lib/siteData'
import Link from 'next/link'

export default function FoundersPage() {
  const blaise = site.team.find(member => member.name === 'Seka Jean Blaise Tarnyu')
  const triumph = site.team.find(member => member.name === 'Triumph Kia Teh')

  return (
    <main>
      <Nav />
      <section className="container py-12">
        <h1 className="text-3xl font-bold text-center mb-12">Our Founders</h1>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-16">
          Meet the visionary leaders who founded Dewise Foundation and continue to drive our mission 
          of empowering underserved communities through education, clean energy, and climate action.
        </p>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Blaise - CEO & Founder */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 bg-sky-100 rounded-full flex items-center justify-center overflow-hidden">
                  <ImageWithFallback
                    src={blaise?.image || ''}
                    alt={blaise?.name || 'Blaise'}
                    fallback="👤"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{blaise?.name}</h2>
                <p className="text-lg font-semibold text-sky-600">{blaise?.role}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Bio</h3>
                  <p className="text-gray-700 leading-relaxed">{blaise?.bio}</p>
                </div>

                {blaise?.achievements && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h3>
                    <ul className="space-y-2">
                      {blaise.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-sky-500 text-lg">✓</span>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {blaise?.credentials && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Credentials</h3>
                    <p className="text-gray-700">{blaise.credentials}</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Triumph - Cofounder & Head of Technology */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="w-32 h-32 mx-auto mb-4 bg-sky-100 rounded-full flex items-center justify-center overflow-hidden">
                  <ImageWithFallback
                    src={triumph?.image || ''}
                    alt={triumph?.name || 'Triumph'}
                    fallback="👤"
                    className="w-32 h-32 rounded-full object-cover"
                  />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">{triumph?.name}</h2>
                <p className="text-lg font-semibold text-sky-600">{triumph?.role}</p>
              </div>

              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Bio</h3>
                  <p className="text-gray-700 leading-relaxed">{triumph?.bio}</p>
                </div>

                {triumph?.achievements && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Achievements</h3>
                    <ul className="space-y-2">
                      {triumph.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="text-sky-500 text-lg">✓</span>
                          <span className="text-gray-700">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {triumph?.credentials && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Credentials</h3>
                    <p className="text-gray-700">{triumph.credentials}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-sky-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Join Our Mission</h3>
          <p className="text-gray-600 mb-6">
            Inspired by our founders' vision? Learn more about our work and how you can get involved.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/about"
              className="rounded-md bg-primary px-6 py-3 text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              Our Mission
            </Link>
            <Link
              href="/contact"
              className="rounded-md border border-sky-200 px-6 py-3 text-sky-700 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
