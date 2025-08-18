import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { site } from '@/lib/siteData'

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
              <a href="mailto:infodewise@gmail.com?subject=Partnership Inquiry" className="btn-secondary w-full">Learn More</a>
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

        {/* Social Media Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-charcoal mb-6 text-center">Follow Us on Social Media</h2>
          <div className="bg-gradient-to-r from-sand to-cream p-8 rounded-lg border-2 border-gold">
            <div className="text-center">
              <p className="text-charcoal mb-6">
                Stay connected with our latest updates, project progress, and community impact stories.
              </p>
              <div className="flex justify-center space-x-8">
                {site.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-charcoal hover:text-forest transition-colors duration-200 flex flex-col items-center group"
                  >
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-3 group-hover:bg-forest group-hover:text-white transition-colors border-2 border-gold">
                      {social.label === 'LinkedIn' && (
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.047-1.852-3.047-1.853 0-2.136 1.445-2.136 2.939v5.677H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      )}
                      {social.label === 'Facebook' && (
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      )}
                      {social.label === 'Instagram' && (
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.49.49-1.297.807-2.026.807s-1.536-.317-2.026-.807c-.49-.49-.807-1.297-.807-2.026s.317-1.536.807-2.026c.49-.49 1.297-.807 2.026-.807s1.536.317 2.026.807c.49.49.807 1.297.807 2.026s-.317 1.536-.807 2.026z"/>
                        </svg>
                      )}
                    </div>
                    <span className="text-lg font-semibold">{social.label}</span>
                    <span className="text-sm text-charcoal">Follow us</span>
                  </a>
                ))}
              </div>
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


