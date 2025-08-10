import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export type ContentMeta = {
  slug: string
  title: string
  date?: string
  summary?: string
  tags?: string[]
}

const CONTENT_DIR = path.join(process.cwd(), 'content')

function readCollection(dirName: 'blog' | 'news'): ContentMeta[] {
  const dir = path.join(CONTENT_DIR, dirName)
  if (!fs.existsSync(dir)) return []
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.mdx') || f.endsWith('.md'))
  const metas = files
    .map((file) => {
      const raw = fs.readFileSync(path.join(dir, file), 'utf8')
      const { data } = matter(raw)
      const slug = file.replace(/\.(mdx|md)$/i, '')
      const dateStr =
        typeof data.date === 'string'
          ? data.date
          : data.date instanceof Date
          ? data.date.toISOString().slice(0, 10)
          : undefined
      return {
        slug,
        title: data.title || slug,
        date: dateStr,
        summary: data.summary || undefined,
        tags: data.tags || []
      } as ContentMeta
    })
  metas.sort((a, b) => (a.date && b.date ? b.date.localeCompare(a.date) : 0))
  return metas
}

export function getBlogList(): ContentMeta[] {
  return readCollection('blog')
}

export function getNewsList(): ContentMeta[] {
  return readCollection('news')
}

export function getContentFile(dirName: 'blog' | 'news', slug: string): string | null {
  const dir = path.join(CONTENT_DIR, dirName)
  const filepathMdx = path.join(dir, `${slug}.mdx`)
  const filepathMd = path.join(dir, `${slug}.md`)
  if (fs.existsSync(filepathMdx)) return filepathMdx
  if (fs.existsSync(filepathMd)) return filepathMd
  return null
}


