import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'

export default function ContactPage() {
  return (
    <main>
      <Nav />
      <section className="container py-12">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <div>
            <p className="text-gray-700">We would love to hear from you.</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              <li>Email: <a className="text-sky-700" href="mailto:contact@dewisefoundation.org">contact@dewisefoundation.org</a></li>
              <li>Location: Yaoundé, Cameroon</li>
            </ul>
          </div>
          <form
            action="https://formspree.io/f/example" // replace with real endpoint
            method="POST"
            className="space-y-4"
          >
            <input name="name" placeholder="Your name" className="w-full rounded-md border border-gray-300 p-3" required />
            <input name="email" placeholder="Your email" type="email" className="w-full rounded-md border border-gray-300 p-3" required />
            <textarea name="message" placeholder="Your message" className="w-full rounded-md border border-gray-300 p-3" rows={5} required />
            <button className="rounded-md bg-primary px-4 py-2 text-white hover:bg-sky-600" type="submit">Send</button>
          </form>
        </div>
      </section>
      <Footer />
    </main>
  )
}


