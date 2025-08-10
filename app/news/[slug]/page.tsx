import { notFound } from 'next/navigation'
import { MDXRemote } from 'next-mdx-remote/rsc'
import matter from 'gray-matter'
import fs from 'fs'
import { Nav } from '@/components/Nav'
import { Footer } from '@/components/Footer'
import { getNewsList, getContentFile } from '@/lib/content'
import remarkGfm from 'remark-gfm'

export function generateStaticParams() {
  return getNewsList().map((p) => ({ slug: p.slug }))
}

export default function NewsItemPage({ params }: { params: { slug: string } }) {
  const filepath = getContentFile('news', params.slug)
  if (!filepath) return notFound()
  const raw = fs.readFileSync(filepath, 'utf8')
  const { content, data } = matter(raw)

  return (
    <main>
      <Nav />
      <article className="container prose prose-sky max-w-3xl py-12">
        <h1>{data.title || params.slug}</h1>
        {data.date && <p className="text-sm text-gray-500">{typeof data.date === 'string' ? data.date : new Date(data.date).toISOString().slice(0,10)}</p>}
        <MDXRemote source={content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
      </article>
      <Footer />
    </main>
  )
}


