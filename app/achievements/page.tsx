import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { site } from '@/lib/siteData'
import { ImageWithFallback } from '@/components/ImageWithFallback'

export default function AchievementsPage() {
  const wisecoolProject = site.projects.find(p => p.slug === 'wisecool')

  return (
    <main>
      <Nav />
      <section className="container-max section-padding">
        <h1 className="text-3xl font-bold text-charcoal">Achievements & Recognition</h1>
        <p className="mt-4 max-w-3xl text-lg text-charcoal">
          Dewise Foundation has achieved remarkable international recognition for our innovative solutions and commitment to 
          community development. Our work is transforming lives across Cameroon and gaining global attention.
        </p>

        {/* Recognition & Certificates - Moved to top for immediate visual impact */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6 text-charcoal">Recognition & Certificates</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {site.recognition.certificates.map((certificate, index) => (
              <div key={index} className="card">
                <ImageWithFallback 
                  src={certificate.src} 
                  alt={certificate.alt} 
                  fallback=""
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-4">
                  <p className="text-sm text-charcoal font-medium">{certificate.caption}</p>
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
              <div key={index} className="card-accent">
                <div className="flex items-start gap-4">
                  <div className="text-2xl text-gold">Award</div>
                  <div>
                    <h3 className="font-semibold text-charcoal">{highlight}</h3>
                    <p className="text-sm text-charcoal mt-1">International recognition for excellence</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Davis Projects for Peace Award */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-charcoal">Davis Projects for Peace Award</h2>
          <div className="bg-gradient-to-r from-sand to-cream p-8 rounded-lg border-2 border-gold">
            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold text-charcoal mb-4">WiseBox: Sole Dartmouth Recipient</h3>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="text-gold text-lg">Award</div>
                    <span className="text-charcoal">Selected from 125 U.S.-funded projects nationwide</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-gold text-lg">Recognition</div>
                    <span className="text-charcoal">Sole Dartmouth recipient of prestigious Davis Foundation award</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-gold text-lg">Timeline</div>
                    <span className="text-charcoal">Summer 2025 expansion planned for crisis-affected regions</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-gold text-lg">Global</div>
                    <span className="text-charcoal">International recognition for innovative community energy solutions</span>
                  </div>
                </div>
                
                <div className="p-4 bg-white rounded-lg border border-sand">
                  <h4 className="font-semibold text-sky mb-2">Project Innovation</h4>
                  <p className="text-sm text-charcoal">
                    WiseBox represents a breakthrough in deploying solar-powered mobile learning devices to students in remote, 
                    rural, and crisis-affected Anglophone regions of Cameroon, directly combating educational disruption through clean energy access.
                  </p>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4 text-gold">Davis</div>
                  <div className="text-2xl font-bold text-sky">Projects for Peace</div>
                  <div className="text-sm text-charcoal">Prestigious International Award</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WiseCool Project Recognition */}
        {wisecoolProject?.recognition && (
          <div className="mt-16">
            <h2 className="text-2xl font-semibold mb-6 text-charcoal">Project Recognition: WiseCool</h2>
            <div className="bg-gradient-to-r from-cream to-sand p-8 rounded-lg border-2 border-forest">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold text-charcoal mb-4">MTN PachiPanda Challenge 2024</h3>
                  <div className="space-y-3">
                    {wisecoolProject.recognition.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="text-forest text-lg">Achievement</div>
                        <span className="text-charcoal">{achievement}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-white rounded-lg border border-sand">
                    <h4 className="font-semibold text-forest mb-2">Innovation Impact</h4>
                    <p className="text-sm text-charcoal">
                      {wisecoolProject.recognition.innovation}
                    </p>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-6xl text-forest">WiseCool</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Our Work in Action - Improved positioning and layout */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-charcoal">Our Work in Action</h2>
          
          {/* SunSpark Project */}
          <div className="mb-12">
            <h3 className="text-xl font-semibold text-forest mb-6">SunSpark Energy Accelerator</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {site.projectImages.sunspark.map((image, index) => (
                <div key={index} className="card">
                  <ImageWithFallback 
                    src={image.src} 
                    alt={image.alt} 
                    fallback=""
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-charcoal">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Fellowship Program */}
          <div>
            <h3 className="text-xl font-semibold text-forest mb-6">Energy Transition Fellowship 2024</h3>
            <div className="grid gap-6 md:grid-cols-2">
              {site.projectImages.fellowship.map((image, index) => (
                <div key={index} className="card">
                  <ImageWithFallback 
                    src={image.src} 
                    alt={image.alt} 
                    fallback=""
                    className="w-full h-64 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-charcoal">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Crisis Response Impact */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-charcoal">Humanitarian Crisis Response</h2>
          <div className="bg-gradient-to-r from-cream to-sand p-8 rounded-lg border-2 border-terracotta">
            <h3 className="text-xl font-semibold text-charcoal mb-4">{site.crisisResponse.title}</h3>
            <p className="text-charcoal mb-6">{site.crisisResponse.context}</p>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-terracotta mb-3">Our Impact</h4>
                <ul className="space-y-2">
                  {site.crisisResponse.impact.map((impact, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-terracotta">•</span>
                      <span className="text-charcoal">{impact}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-terracotta mb-3">Key Programs</h4>
                <ul className="space-y-2">
                  {site.crisisResponse.programs.map((program, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-terracotta">•</span>
                      <span className="text-charcoal">{program}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Innovation Ecosystem */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-charcoal">Innovation Ecosystem</h2>
          <div className="bg-gradient-to-r from-sand to-cream p-8 rounded-lg border-2 border-sky">
            <h3 className="text-xl font-semibold text-charcoal mb-4">{site.innovationEcosystem.title}</h3>
            <p className="text-charcoal mb-6">{site.innovationEcosystem.context}</p>
            
            <div className="grid gap-4 md:grid-cols-2">
              {site.innovationEcosystem.opportunities.map((opportunity, index) => (
                <div key={index} className="bg-white p-4 rounded-lg border border-sand">
                  <div className="flex items-start gap-3">
                    <div className="text-sky text-lg">Innovation</div>
                    <span className="text-charcoal">{opportunity}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Youth Investment */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6 text-charcoal">Investment in Youth Innovation</h2>
          <div className="bg-gradient-to-r from-cream to-sand p-8 rounded-lg border-2 border-amber">
            <h3 className="text-xl font-semibold text-charcoal mb-4">{site.youthInvestment.title}</h3>
            <p className="text-charcoal mb-4">{site.youthInvestment.context}</p>
            <p className="text-charcoal font-medium">{site.youthInvestment.impact}</p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-sand p-8 rounded-lg border-2 border-gold">
          <h3 className="text-xl font-semibold text-charcoal mb-3">Join Our Success Story</h3>
          <p className="text-charcoal mb-6">
            Support our internationally recognized work and help us expand our impact across Cameroon and beyond.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="/donate" 
              className="btn-primary"
            >
              Support Our Mission
            </a>
            <a 
              href="/contact" 
              className="btn-secondary"
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
