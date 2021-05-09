import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const postsDirectory = join(process.cwd(), '_posts')

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory)
}

export interface PostData {
  title: string,
  date: string,
  slug: string,
  content: string,
  coverImage: string,
  excerpt: string
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(postsDirectory, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const {
    coverImage,
    date,
    excerpt,
    title
  } = data

  return {
    content,
    coverImage,
    date,
    excerpt,
    slug: realSlug,
    title
  }
}

export function getAllPosts(limit?: number) {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => ((post1.date) > (post2.date) ? -1 : 1))
  return limit ? posts.slice(0, limit) : posts
}