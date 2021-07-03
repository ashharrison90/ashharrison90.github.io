import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const POSTS_DIR = join(process.cwd(), '__content__', 'posts')

export interface PostData {
  title: string
  date: string
  slug: string
  content: string
  coverImage: string
  excerpt: string
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(POSTS_DIR, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const { coverImage, date, excerpt, title } = data

  return {
    content,
    coverImage,
    date,
    excerpt,
    slug: realSlug,
    title,
  }
}

export function getAllPosts(limit?: number) {
  const slugs = fs.readdirSync(POSTS_DIR).filter((file) => file.endsWith('.md'))
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return limit ? posts.slice(0, limit) : posts
}
