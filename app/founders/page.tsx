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
                {/* Personal Journey Story */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">The Journey of Resilience</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Triumph's story is one of extraordinary resilience and transformation. As an Internally Displaced Person (IDP) himself, 
                    he faced the harsh realities of limited access to education during the Anglophone Crisis. Taking three gap years to 
                    navigate poverty and hardship, his breakthrough came through Open Dreams, where he was selected as a scholar from 
                    hundreds of national applicants in Cameroon.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-3">
                    This opportunity led him to Dartmouth College as one of only six global King Scholars worldwide, receiving a 
                    full-ride scholarship for his exceptional leadership, academic excellence, and commitment to service. His journey 
                    from IDP to Ivy League student inspired him to co-found Dewise Foundation, creating access to education and 
                    opportunities for thousands of other youths facing similar challenges.
                  </p>
                </div>

                {/* Academic Excellence */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Academic Excellence</h3>
                  <p className="text-gray-700 leading-relaxed">
                    As a senior at Dartmouth College (Class of 2026), Triumph pursues a dual major in Computer Science and Cognitive Science, 
                    reflecting his belief that understanding the human mind is inseparable from building intelligent systems that serve humanity.
                  </p>
                  <div className="mt-3 p-4 bg-sky-50 rounded-lg">
                    <h4 className="font-semibold text-sky-700 mb-2">Key Academic Achievements</h4>
                    <ul className="space-y-1 text-sm text-sky-700">
                      <li>• King Scholar (Global, 1 of 6 worldwide) - Full-ride scholarship</li>
                      <li>• Rufus Choate Scholar (Top 5% of Dartmouth, 2023)</li>
                      <li>• Great Issues Scholar (2022-2023)</li>
                      <li>• Evolutionary Game Theory Prize (2025)</li>
                      <li>• Open Dreams Scholar (2019-present)</li>
                    </ul>
                  </div>
                </div>

                {/* AI & Technology Leadership */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">AI & Technology Leadership</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Triumph operates at the forefront of AI development, blending theoretical depth with tangible social applications. 
                    As an AI R&D Researcher at LTTS and Head of Technology for startups, he develops advanced AI systems with real-world impact.
                  </p>
                  <div className="mt-3 p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-700 mb-2">Innovation Highlights</h4>
                    <ul className="space-y-1 text-sm text-purple-700">
                      <li>• AI-powered therapy bot serving 6,700+ Dartmouth students</li>
                      <li>• Neural network data analysis at Columbia University's Paul Lab</li>
                      <li>• Video processing and applied cognitive modeling research</li>
                      <li>• Industry leadership in AI engineering and development</li>
                    </ul>
                  </div>
                </div>

                {/* Dewise Foundation Impact */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Co-Founding Dewise Foundation</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Triumph's most profound impact stems from co-founding Dewise Foundation in 2022. His personal experience as an IDP 
                    drives his mission to create opportunities for thousands of youths facing similar challenges.
                  </p>
                  <div className="mt-3 p-4 bg-emerald-50 rounded-lg">
                    <h4 className="font-semibold text-emerald-700 mb-2">Foundation Achievements</h4>
                    <ul className="space-y-1 text-sm text-emerald-700">
                      <li>• WiseBox Project: Davis Foundation's Projects for Peace award recipient</li>
                      <li>• WiseCool: IoT-enabled solar cooling for vaccine preservation</li>
                      <li>• National Energy Transition Fellowship: 200+ attendees</li>
                      <li>• DeWise Fellowship: Supporting displaced youth solutions</li>
                      <li>• $20,000+ in grant funding secured</li>
                      <li>• 2,000+ youths and IDPs directly impacted</li>
                    </ul>
                  </div>
                </div>

                {/* Global Health Experience */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Global Health Leadership</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Triumph's commitment to global health spans six countries, with high-impact roles at organizations like UNAIDS, 
                    BroadReach, and MEDLIFE, focusing on scalable health system improvements and community health advocacy.
                  </p>
                </div>

                {/* Vision Statement */}
                <div className="p-4 bg-gradient-to-r from-sky-50 to-emerald-50 rounded-lg border-l-4 border-sky-500">
                  <h4 className="font-semibold text-sky-700 mb-2">Vision for the Future</h4>
                  <p className="text-sm text-sky-700">
                    Triumph is fundamentally reshaping "AI for Social Good" by integrating cutting-edge technology with deep empathy 
                    for underserved communities. His work proves that youth-led innovation, grounded in rigorous science and community 
                    partnership, is the most potent force for building resilient, equitable futures.
                  </p>
                </div>
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
