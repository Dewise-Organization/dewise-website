import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { site } from '@/lib/siteData'

export default function CareersPage() {
  const currentOpenings = [
    {
      title: "Program Coordinator",
      department: "Programs",
      location: "Yaoundé, Cameroon",
      type: "Full-time",
      description: "Coordinate and manage our community engagement and youth empowerment programs across Cameroon.",
      requirements: [
        "Bachelor's degree in Social Work, Community Development, or related field",
        "2+ years experience in program coordination",
        "Strong organizational and communication skills",
        "Passion for community development and youth empowerment"
      ]
    },
    {
      title: "Clean Energy Technician",
      department: "Clean Energy",
      location: "Northern Regions, Cameroon",
      type: "Full-time",
      description: "Install and maintain solar energy systems in underserved communities across northern Cameroon.",
      requirements: [
        "Technical certification in electrical engineering or solar installation",
        "Experience with solar panel installation and maintenance",
        "Willingness to travel to remote communities",
        "Strong problem-solving skills"
      ]
    },
    {
      title: "Youth Training Facilitator",
      department: "Youth Empowerment",
      location: "Multiple Locations, Cameroon",
      type: "Contract",
      description: "Facilitate training sessions for youth in leadership, climate justice, and clean energy technologies.",
      requirements: [
        "Experience in youth development and training",
        "Knowledge of climate justice and clean energy",
        "Excellent presentation and facilitation skills",
        "Fluency in English and French preferred"
      ]
    }
  ]

  const benefits = [
    {
      icon: "🌍",
      title: "Meaningful Impact",
      description: "Work directly with communities to create sustainable change across Cameroon."
    },
    {
      icon: "🚀",
      title: "Professional Growth",
      description: "Access to training, mentorship, and international networking opportunities."
    },
    {
      icon: "🤝",
      title: "Collaborative Culture",
      description: "Join a diverse team passionate about community development and innovation."
    },
    {
      icon: "💡",
      title: "Innovation Focus",
      description: "Work on cutting-edge solutions in clean energy and sustainable development."
    }
  ]

  return (
    <main>
      <Nav />
      <section className="container-max section-padding">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-charcoal">Join Our Mission</h1>
          <p className="mt-3 max-w-3xl text-lg text-charcoal mx-auto">
            Be part of a team that's transforming communities across Cameroon through innovative solutions 
            in education, clean energy, and climate action.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-charcoal mb-6 text-center">Why Work With Us?</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="card text-center">
                <div className="text-4xl text-forest mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-charcoal mb-2">{benefit.title}</h3>
                <p className="text-charcoal text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Current Openings */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-charcoal mb-6 text-center">Current Openings</h2>
          <div className="space-y-6">
            {currentOpenings.map((job, index) => (
              <div key={index} className="card-accent">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-charcoal mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-charcoal mb-3">
                      <span className="bg-cream px-3 py-1 rounded-full border border-sand">
                        {job.department}
                      </span>
                      <span className="bg-cream px-3 py-1 rounded-full border border-sand">
                        {job.location}
                      </span>
                      <span className="bg-cream px-3 py-1 rounded-full border border-sand">
                        {job.type}
                      </span>
                    </div>
                    <p className="text-charcoal mb-4">{job.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-charcoal mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-2">
                            <span className="text-gold">•</span>
                            <span className="text-charcoal text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="lg:text-right">
                    <button className="btn-primary">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-charcoal mb-6 text-center">Application Process</h2>
          <div className="grid gap-6 md:grid-cols-4">
            <div className="card text-center">
              <div className="text-3xl text-sky mb-3">1</div>
              <h3 className="font-semibold text-charcoal mb-2">Submit Application</h3>
              <p className="text-charcoal text-sm">Send your CV and cover letter to our team.</p>
            </div>
            
            <div className="card text-center">
              <div className="text-3xl text-sky mb-3">2</div>
              <h3 className="font-semibold text-charcoal mb-2">Initial Review</h3>
              <p className="text-charcoal text-sm">Our team reviews your application and experience.</p>
            </div>
            
            <div className="card text-center">
              <div className="text-3xl text-sky mb-3">3</div>
              <h3 className="font-semibold text-charcoal mb-2">Interview</h3>
              <p className="text-charcoal text-sm">Meet with our team to discuss the role and your goals.</p>
            </div>
            
            <div className="card text-center">
              <div className="text-3xl text-sky mb-3">4</div>
              <h3 className="font-semibold text-charcoal mb-2">Decision</h3>
              <p className="text-charcoal text-sm">We'll notify you of our decision within 2 weeks.</p>
            </div>
          </div>
        </div>

        {/* General Application */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-charcoal mb-6 text-center">General Application</h2>
          <div className="bg-gradient-to-r from-sand to-cream p-8 rounded-lg border-2 border-gold">
            <div className="text-center">
              <h3 className="text-xl font-semibold text-charcoal mb-4">Don't See the Right Role?</h3>
              <p className="text-charcoal mb-6">
                We're always looking for passionate individuals who want to make a difference. 
                Send us your CV and let us know how you'd like to contribute to our mission.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a 
                  href="mailto:infodewise@gmail.com?subject=General Career Application"
                  className="btn-primary"
                >
                  Send Your CV
                </a>
                <a href="/contact" className="btn-secondary">
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-sand p-8 rounded-lg border-2 border-gold">
          <h3 className="text-xl font-semibold text-charcoal mb-3">Ready to Make a Difference?</h3>
          <p className="text-charcoal mb-6">
            Join our team and help us empower communities across Cameroon through sustainable solutions.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="mailto:infodewise@gmail.com?subject=Career Inquiry"
              className="btn-primary"
            >
              Get Started
            </a>
            <a href="/about" className="btn-secondary">
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
