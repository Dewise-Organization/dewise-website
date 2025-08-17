import { notFound } from 'next/navigation'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { ImageWithFallback } from '@/components/ImageWithFallback'
import { site } from '@/lib/siteData'
import Link from 'next/link'

type Props = { params: { slug: string } }

export function generateStaticParams() {
  return site.projects.map((p) => ({ slug: p.slug }))
}

export default function ProjectDetailPage({ params }: Props) {
  const project = site.projects.find((p) => p.slug === params.slug)
  if (!project) return notFound()

  return (
    <main>
      <Nav />
      <section className="container-max section-padding">
        <div className="text-sm uppercase text-sky">{project.kicker}</div>
        <h1 className="mt-1 text-3xl font-bold text-charcoal">{project.title}</h1>
        <p className="mt-4 max-w-3xl text-lg text-charcoal">{project.summary}</p>
        
        {/* Project Icon and Overview */}
        <div className="mt-8 flex items-center gap-4">
          <div className="text-4xl text-forest">{project.title}</div>
          <div>
            <h2 className="text-xl font-semibold text-charcoal">Project Overview</h2>
            <p className="text-charcoal">{project.detailedDescription}</p>
          </div>
        </div>

        {/* Project Photos - Moved to appear early for immediate visual impact */}
        {project.photos && (
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-6 text-charcoal">Project in Action</h3>
            <div className="grid gap-6 md:grid-cols-3">
              {project.photos.map((photo, index) => (
                <div key={index} className="card">
                  <ImageWithFallback 
                    src={photo.src} 
                    alt={photo.alt} 
                    fallback=""
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <div className="p-4">
                    <p className="text-sm text-charcoal font-medium">{photo.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* New Section: Project Context and Crisis Impact */}
        {project.context && (
          <div className="mt-12 bg-gradient-to-r from-cream to-sand p-8 rounded-lg border-2 border-terracotta">
            <h3 className="text-xl font-semibold text-charcoal mb-4">{project.context.title}</h3>
            <p className="text-charcoal mb-6">{project.context.description}</p>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-terracotta mb-3">Key Statistics</h4>
                <div className="space-y-2">
                  {project.context.numerics.map((numeric, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="text-terracotta text-lg">Statistics</div>
                      <span className="text-charcoal text-sm">{numeric}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-terracotta mb-3">Crisis Impact</h4>
                <p className="text-charcoal text-sm">{project.context.crisisImpact}</p>
              </div>
            </div>
          </div>
        )}

        {/* New Section: Youth Training and Entrepreneurship */}
        {project.youthTraining && (
          <div className="mt-12 bg-gradient-to-r from-sand to-cream p-8 rounded-lg border-2 border-forest">
            <h3 className="text-xl font-semibold text-charcoal mb-4">{project.youthTraining.title}</h3>
            <p className="text-charcoal mb-6">{project.youthTraining.description}</p>
            
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h4 className="font-semibold text-forest mb-3">Training Achievements</h4>
                <div className="space-y-2">
                  {project.youthTraining.achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="text-forest text-lg">Achievement</div>
                      <span className="text-charcoal text-sm">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-forest mb-3">Scale and Impact</h4>
                <p className="text-charcoal text-sm">{project.youthTraining.scale}</p>
              </div>
            </div>
          </div>
        )}

        {/* Project Details Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Objectives */}
          <div className="card">
            <h3 className="text-lg font-semibold text-forest mb-4">Objectives</h3>
            <ul className="space-y-3">
              {project.objectives.map((objective, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-forest mr-2">•</span>
                  <span className="text-charcoal">{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Activities */}
          <div className="card">
            <h3 className="text-lg font-semibold text-forest mb-4">Activities</h3>
            <ul className="space-y-3">
              {project.activities.map((activity, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-forest mr-2">•</span>
                  <span className="text-charcoal">{activity}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Impact */}
          <div className="card">
            <h3 className="text-lg font-semibold text-forest mb-4">Impact</h3>
            <ul className="space-y-3">
              {project.impact.map((impact, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-forest mr-2">•</span>
                  <span className="text-charcoal">{impact}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Before/After Impact Visualization */}
        <div className="mt-12 bg-gradient-to-r from-sand to-cream p-8 rounded-lg border-2 border-forest">
          <h3 className="text-xl font-semibold text-charcoal mb-6 text-center">Impact Visualization</h3>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white p-6 rounded-lg border border-sand">
              <h4 className="font-semibold text-terracotta mb-3">Before</h4>
              <p className="text-charcoal">{project.beforeAfter.before}</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-sand">
              <h4 className="font-semibold text-forest mb-3">After</h4>
              <p className="text-charcoal">{project.beforeAfter.after}</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center bg-sand p-8 rounded-lg border-2 border-gold">
          <h3 className="text-xl font-semibold text-charcoal mb-3">Support This Project</h3>
          <p className="text-charcoal mb-6">
            Help us expand {project.title} to reach more communities and create greater impact.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/donate" className="btn-primary">
              Donate Now
            </Link>
            <Link href="/contact" className="btn-secondary">
              Get Involved
            </Link>
          </div>
        </div>

        {/* Related Projects */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-charcoal">Other Projects</h3>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {site.projects
              .filter(p => p.slug !== project.slug)
              .map((p) => (
                <Link key={p.slug} href={`/projects/${p.slug}`} className="card hover:border-sky transition-colors">
                  <div className="text-2xl mb-2 text-forest">{p.title}</div>
                  <div className="text-sm uppercase text-sky">{p.kicker}</div>
                  <div className="text-lg font-semibold text-charcoal">{p.title}</div>
                  <p className="text-charcoal text-sm mt-2">{p.summary}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


