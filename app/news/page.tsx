import Link from 'next/link'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { getNewsList } from '@/lib/content'

export const dynamic = 'force-static'

export default function NewsIndexPage() {
  const items = getNewsList()
  return (
    <main>
      <Nav />
      <section className="container py-12">
        <h1 className="text-3xl font-bold">News</h1>
        <ul className="mt-6 space-y-4">
          {items.map((p) => (
            <li key={p.slug} className="rounded-lg border border-gray-200 p-5">
              <Link href={`/news/${p.slug}`} className="text-lg font-semibold text-sky-700 hover:underline">
                {p.title}
              </Link>
              {p.date && <div className="text-sm text-gray-500">{p.date}</div>}
              {p.summary && <p className="mt-2 text-gray-700">{p.summary}</p>}
            </li>
          ))}
          {!items.length && <li>No news yet.</li>}
        </ul>
      </section>
      <Footer />
    </main>
  )
}


