import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <section className="container-max section-padding">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-charcoal">Get in Touch</h1>
          <p className="mt-3 max-w-3xl text-lg text-charcoal mx-auto">
            We would love to hear from you. Whether you have questions, want to get involved, or are interested in
            supporting our mission, we're here to help.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div>
            <h2 className="text-2xl font-semibold text-charcoal mb-6">Contact Information</h2>
            
            <div className="space-y-6">
              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="text-2xl text-sky">Email</div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Email</h3>
                    <p className="text-charcoal">We would love to hear from you.</p>
                    <ul className="mt-4 space-y-2 text-charcoal">
                      <li>Email: <a className="text-sky hover:text-forest transition-colors" href="mailto:infodewise@gmail.com">infodewise@gmail.com</a></li>
                      <li>Location: Yaoundé, Cameroon</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="text-2xl text-sky">Location</div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Location</h3>
                    <p className="text-charcoal">Our main office is located in the heart of Yaoundé, Cameroon's capital city.</p>
                    <div className="mt-4 p-3 bg-cream rounded-md border border-sand">
                      <p className="text-sm text-charcoal font-medium">Yaoundé, Cameroon</p>
                      <p className="text-xs text-charcoal">Central Africa</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="flex items-start gap-4">
                  <div className="text-2xl text-sky">Response Time</div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">Response Time</h3>
                    <p className="text-charcoal">We typically respond to all inquiries within 24-48 hours.</p>
                    <div className="mt-4 p-3 bg-cream rounded-md border border-sand">
                      <p className="text-sm text-charcoal font-medium">24-48 hours</p>
                      <p className="text-xs text-charcoal">Monday - Friday</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-semibold text-charcoal mb-6">Send Us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-charcoal mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="w-full rounded-lg border border-sand px-4 py-3 focus:border-sky focus:outline-none focus:ring-2 focus:ring-blue-500 text-charcoal"
                    placeholder="Your first name"
                  />
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-charcoal mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="w-full rounded-lg border border-sand px-4 py-3 focus:border-sky focus:outline-none focus:ring-2 focus:ring-blue-500 text-charcoal"
                    placeholder="Your last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full rounded-lg border border-sand px-4 py-3 focus:border-sky focus:outline-none focus:ring-2 focus:ring-blue-500 text-charcoal"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-charcoal mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  className="w-full rounded-lg border border-sand px-4 py-3 focus:border-sky focus:outline-none focus:ring-2 focus:ring-blue-500 text-charcoal"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="volunteer">Volunteer Interest</option>
                  <option value="donation">Donation Question</option>
                  <option value="media">Media Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  className="w-full rounded-lg border border-sand px-4 py-3 focus:border-sky focus:outline-none focus:ring-2 focus:ring-blue-500 text-charcoal"
                  placeholder="Tell us how we can help you..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Additional Contact Methods */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-charcoal mb-6 text-center">Other Ways to Connect</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="card text-center">
              <div className="text-4xl text-forest mb-4">Partnerships</div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Partnerships</h3>
              <p className="text-charcoal text-sm mb-4">Interested in collaborating with us?</p>
              <a href="/partnerships" className="btn-secondary w-full">Learn More</a>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl text-forest mb-4">Careers</div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Careers</h3>
              <p className="text-charcoal text-sm mb-4">Join our team and make a difference</p>
              <a href="mailto:infodewise@gmail.com?subject=Career Inquiry" className="btn-secondary w-full">Apply Now</a>
            </div>
            
            <div className="card text-center">
              <div className="text-4xl text-forest mb-4">Media</div>
              <h3 className="text-lg font-semibold text-charcoal mb-2">Media</h3>
              <p className="text-charcoal text-sm mb-4">Press inquiries and media requests</p>
              <a href="mailto:infodewise@gmail.com?subject=Media Inquiry" className="btn-secondary w-full">Contact Press</a>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center bg-sand p-8 rounded-lg border-2 border-gold">
          <h3 className="text-xl font-semibold text-charcoal mb-3">Ready to Get Involved?</h3>
          <p className="text-charcoal mb-6">
            Whether you want to volunteer, partner with us, or support our mission, we'd love to hear from you.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a href="mailto:infodewise@gmail.com?subject=Support Dewise Foundation Mission" className="btn-primary">
              Support Our Mission
            </a>
            <a href="mailto:infodewise@gmail.com?subject=Learn More About Dewise Foundation" className="btn-secondary">
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}


