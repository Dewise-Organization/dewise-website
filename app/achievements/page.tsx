import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { ImageWithFallback } from '@/components/ImageWithFallback'
import { site } from '@/lib/siteData'

export default function AchievementsPage() {
  const wisecoolProject = site.projects.find(p => p.slug === 'wisecool')

  return (
    <main>
      <Nav />
      <section className="container py-12">
        <h1 className="text-3xl font-bold">Achievements & Recognition</h1>
        <p className="mt-4 max-w-3xl text-lg text-gray-700">
          Dewise Foundation has achieved remarkable international recognition for our innovative solutions and commitment to 
          community development. Our work is transforming lives across Cameroon and gaining global attention.
        </p>

        {/* Recognition & Certificates - Moved to top for immediate visual impact */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Recognition & Certificates</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {site.recognition.certificates.map((certificate, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                <ImageWithFallback 
                  src={certificate.src} 
                  alt={certificate.alt} 
                  fallback="🏆"
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-sm text-gray-700 font-medium">{certificate.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* International Recognition Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">International Recognition</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {site.hero.recognition.highlights.map((highlight, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="text-2xl">🏆</div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{highlight}</h3>
                    <p className="text-sm text-gray-600 mt-1">International recognition for excellence</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Davis Projects for Peace Award */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Davis Projects for Peace Award</h2>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">WiseBox: Sole Dartmouth Recipient</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="text-blue-500 text-lg">🏆</div>
                    <span className="text-gray-700">Selected from 125 U.S.-funded projects nationwide</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-blue-500 text-lg">🌟</div>
                    <span className="text-gray-700">Sole Dartmouth recipient of prestigious Davis Foundation award</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-blue-500 text-lg">📅</div>
                    <span className="text-gray-700">Summer 2025 expansion planned for crisis-affected regions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-blue-500 text-lg">🌍</div>
                    <span className="text-gray-700">International recognition for innovative community energy solutions</span>
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded-lg">
                  <h4 className="font-semibold text-blue-700 mb-2">Project Innovation</h4>
                  <p className="text-sm text-gray-600">
                    WiseBox represents a breakthrough in deploying solar-powered mobile learning devices to students in remote, 
                    rural, and crisis-affected Anglophone regions of Cameroon, directly combating educational disruption through clean energy access.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">⚡</div>
                  <div className="text-2xl font-bold text-blue-600">Davis Projects for Peace</div>
                  <div className="text-sm text-gray-600">Prestigious International Award</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WiseCool Project Recognition */}
        {wisecoolProject?.recognition && (
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6">Project Recognition: WiseCool</h2>
            <div className="bg-gradient-to-r from-emerald-50 to-sky-50 p-8 rounded-lg">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">MTN PachiPanda Challenge 2024</h3>
                  <div className="space-y-3">
                    {wisecoolProject.recognition.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="text-emerald-500 text-lg">✓</div>
                        <span className="text-gray-700">{achievement}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-white rounded-lg">
                    <h4 className="font-semibold text-emerald-700 mb-2">Innovation Impact</h4>
                    <p className="text-sm text-gray-600">
                      {wisecoolProject.recognition.innovation}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-6xl">🏥</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Our Work in Action - Improved positioning and layout */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Our Work in Action</h2>
          
          {/* SunSpark Project */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-emerald-700 mb-6">SunSpark Energy Accelerator</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {site.projectImages.sunspark.map((image, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                  <ImageWithFallback 
                    src={image.src} 
                    alt={image.alt} 
                    fallback="🌱"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-700">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Fellowship Program */}
          <div>
            <h3 className="text-xl font-semibold text-emerald-700 mb-6">Energy Transition Fellowship 2024</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {site.projectImages.fellowship.map((image, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-200">
                  <ImageWithFallback 
                    src={image.src} 
                    alt={image.alt} 
                    fallback="🌟"
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-gray-700">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Crisis Response Impact */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Humanitarian Crisis Response</h2>
          <div className="bg-red-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-red-800 mb-4">{site.crisisResponse.title}</h3>
            <p className="text-gray-700 mb-6">{site.crisisResponse.context}</p>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-red-700 mb-3">Our Impact</h4>
                <ul className="space-y-2">
                  {site.crisisResponse.impact.map((impact, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      <span className="text-gray-700">{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-700 mb-3">Key Programs</h4>
                <ul className="space-y-2">
                  {site.crisisResponse.programs.map((program, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-red-500">•</span>
                      <span className="text-gray-700">{program}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Ecosystem */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Innovation Ecosystem</h2>
          <div className="bg-purple-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-purple-800 mb-4">{site.innovationEcosystem.title}</h3>
            <p className="text-gray-700 mb-6">{site.innovationEcosystem.context}</p>
            
            <div className="grid gap-4 md:grid-cols-2">
              {site.innovationEcosystem.opportunities.map((opportunity, index) => (
                <div key={index} className="bg-white p-4 rounded-lg">
                  <div className="flex items-start gap-3">
                    <div className="text-purple-500 text-lg">💡</div>
                    <span className="text-gray-700">{opportunity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Youth Investment */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Investment in Youth Innovation</h2>
          <div className="bg-yellow-50 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-yellow-800 mb-4">{site.youthInvestment.title}</h3>
            <p className="text-gray-700 mb-4">{site.youthInvestment.context}</p>
            <p className="text-gray-700 font-medium">{site.youthInvestment.impact}</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-sky-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-gray-900 mb-3">Join Our Success Story</h3>
          <p className="text-gray-600 mb-6">
            Support our internationally recognized work and help us expand our impact across Cameroon and beyond.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/donate" 
              className="rounded-md bg-primary px-6 py-3 text-white hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              Support Our Mission
            </a>
            <a 
              href="/contact" 
              className="rounded-md border border-sky-200 px-6 py-3 text-sky-700 hover:bg-sky-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              Get Involved
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
