import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { site } from '@/lib/siteData'

export default function PartnershipsPage() {
  return (
    <main>
      <Nav />
      <section className="container py-12">
        <h1 className="text-3xl font-bold">Strategic Partnerships</h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700">
          Dewise Foundation collaborates with a sophisticated network of international organizations, innovation hubs, 
          and educational institutions to maximize our impact across Cameroon and beyond.
        </p>

        {/* Partnership Overview */}
        <div className="mt-12 bg-gradient-to-r from-sky-50 to-emerald-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold mb-6">Our Partnership Ecosystem</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-sky-600">4</div>
              <div className="text-sm text-gray-600">Strategic Partners</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">6</div>
              <div className="text-sm text-gray-600">Countries Connected</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">200+</div>
              <div className="text-sm text-gray-600">Scholars Supported</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600">100+</div>
              <div className="text-sm text-gray-600">Startups Supported</div>
            </div>
          </div>
        </div>

        {/* Detailed Partner Profiles */}
        <div className="mt-16 space-y-12">
          {/* MTN Cameroon */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <a href={site.partners[0].website} target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center hover:bg-yellow-200 transition-colors">
                    <img src={site.partners[0].logo} alt={site.partners[0].name} className="w-12 h-12 object-contain" />
                  </a>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      <a href={site.partners[0].website} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-600 transition-colors">
                        {site.partners[0].name}
                      </a>
                    </h3>
                    <p className="text-sm text-gray-600">{site.partners[0].description}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-4 bg-yellow-50 rounded-lg">
                    <h4 className="font-semibold text-yellow-800 mb-2">Competition Partnership</h4>
                    <p className="text-sm text-yellow-700">{site.partners[0].partnership}</p>
                  </div>
                  <p className="text-gray-700">
                    MTN Cameroon's PachiPanda Challenge has provided a global platform for our WiseCool innovation, 
                    advancing it to continental competition level and showcasing Cameroonian innovation on the world stage.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-6xl">🏆</div>
              </div>
            </div>
          </div>

          {/* Mboa Hub */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex items-center justify-center">
                <div className="text-6xl">🌍</div>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <a href={site.partners[1].website} target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors">
                    <img src={site.partners[1].logo} alt={site.partners[1].name} className="w-12 h-12 object-contain rounded-full" />
                  </a>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      <a href={site.partners[1].website} target="_blank" rel="noopener noreferrer" className="hover:text-green-600 transition-colors">
                        {site.partners[1].name}
                      </a>
                    </h3>
                    <p className="text-sm text-gray-600">{site.partners[1].description}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-4 bg-green-50 rounded-lg">
                    <h4 className="font-semibold text-green-800 mb-2">Global Network Connection</h4>
                    <p className="text-sm text-green-700">{site.partners[1].partnership}</p>
                  </div>
                  <p className="text-gray-700">
                    Through Mboa Hub, we're connected to the Planet One global network, operating makerspaces across six countries. 
                    This partnership enables us to scale our impact internationally and access global climate justice networks.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Open Dreams */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <a href={site.partners[2].website} target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors">
                    <img src={site.partners[2].logo} alt={site.partners[2].name} className="w-12 h-12 object-contain" />
                  </a>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      <a href={site.partners[2].website} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                        {site.partners[2].name}
                      </a>
                    </h3>
                    <p className="text-sm text-gray-600">{site.partners[2].description}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <h4 className="font-semibold text-blue-800 mb-2">Scholarship Achievements</h4>
                    <p className="text-sm text-blue-700">{site.partners[2].partnership}</p>
                  </div>
                  <p className="text-gray-700">
                    Open Dreams has been instrumental in supporting over 200 scholars access international scholarships, 
                    with our team member Makoubo Krystie being recognized as Scholar of the Month.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-6xl">🌟</div>
              </div>
            </div>
          </div>

          {/* TiC Foundation */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex items-center justify-center">
                <div className="text-6xl">💻</div>
              </div>
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <a href={site.partners[3].website} target="_blank" rel="noopener noreferrer" className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center hover:bg-purple-200 transition-colors">
                    <img src={site.partners[3].logo} alt={site.partners[3].name} className="w-12 h-12 object-contain" />
                  </a>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      <a href={site.partners[3].website} target="_blank" rel="noopener noreferrer" className="hover:text-purple-600 transition-colors">
                        {site.partners[3].name}
                      </a>
                    </h3>
                    <p className="text-sm text-gray-600">{site.partners[3].description}</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-semibold text-purple-800 mb-2">Innovation Ecosystem</h4>
                    <p className="text-sm text-purple-700">{site.partners[3].partnership}</p>
                  </div>
                  <p className="text-gray-700">
                    TiC Foundation's three flagship programs create a comprehensive innovation ecosystem, supporting over 100 startups 
                    and providing platforms for youth innovation and entrepreneurship development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Climate Justice Network */}
        <div className="mt-16 bg-green-50 p-8 rounded-lg">
          <h2 className="text-2xl font-semibold text-green-800 mb-6">Climate Justice Movement</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-lg font-semibold text-green-700 mb-3">International Participation</h3>
              <p className="text-gray-700 mb-4">
                Our participation in the Climate Justice Camp in Lebanon, funded by Greenpeace Africa, connects us to 
                global climate advocacy networks and energy democracy movements.
              </p>
              <div className="p-4 bg-white rounded-lg">
                <h4 className="font-semibold text-green-700 mb-2">Planet One Network</h4>
                <p className="text-sm text-gray-600">
                  Connected to makerspaces across six countries, enabling international collaboration and knowledge sharing.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="text-6xl">🌍</div>
            </div>
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Partnership Benefits</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Global Reach</h3>
              <p className="text-gray-600 text-sm">
                Access to international networks, competitions, and recognition platforms that amplify our impact.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="text-3xl mb-3">💡</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation Support</h3>
              <p className="text-gray-600 text-sm">
                Technical expertise, mentorship, and resources to develop and scale our innovative solutions.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategic Alignment</h3>
              <p className="text-gray-600 text-sm">
                Shared values and complementary expertise that maximize our collective impact on communities.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-sky-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Join Our Partnership Network</h3>
          <p className="text-gray-600 mb-6">
            We're always looking for strategic partners who share our vision for community development and sustainable innovation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/contact" 
              className="rounded-md bg-primary px-6 py-3 text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              Discuss Partnership
            </a>
            <a 
              href="/donate" 
              className="rounded-md border border-sky-200 px-6 py-3 text-sky-700 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              Support Our Work
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
