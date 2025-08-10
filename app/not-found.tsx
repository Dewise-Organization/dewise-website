import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="container py-24 text-center">
      <h1 className="text-4xl font-bold">Page not found</h1>
      <p className="mt-3 text-gray-600">The page you are looking for does not exist.</p>
      <Link href="/" className="mt-6 inline-block rounded-md bg-primary px-4 py-2 text-white hover:bg-sky-600">Go home</Link>
    </div>
  )
}


