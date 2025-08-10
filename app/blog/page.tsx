import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { getBlogList } from '@/lib/content'

export const dynamic = 'force-static'

export default function BlogIndexPage() {
  const posts = getBlogList()
  return (
    <main>
      <Nav />
      <section className="container py-12">
        <h1 className="text-3xl font-bold">Blog</h1>
        <ul className="mt-6 space-y-4">
          {posts.map((p) => (
            <li key={p.slug} className="rounded-lg border border-gray-200 p-5">
              <Link href={`/blog/${p.slug}`} className="text-lg font-semibold text-sky-700 hover:underline">
                {p.title}
              </Link>
              {p.date && <div className="text-sm text-gray-500">{p.date}</div>}
              {p.summary && <p className="mt-2 text-gray-700">{p.summary}</p>}
            </li>
          ))}
          {!posts.length && <li>No posts yet.</li>}
        </ul>
      </section>
      <Footer />
    </main>
  )
}


