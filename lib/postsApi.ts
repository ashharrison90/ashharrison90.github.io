import fs from 'fs'
import { join } from 'path'

const POSTS_DIR = join(process.cwd(), 'pages', 'posts')

export interface PostMetadata {
  tags: Array<string>
  title: string
  date: string
  slug: string
  coverImage: string
  excerpt: string
}

export async function getPostMetadata(slug: string) {
  const realSlug = slug.replace(/\.mdx$/, '')
  const filePath = `../pages/posts/${realSlug}.mdx`
  const { metadata } = await import(filePath)

  return {
    ...metadata,
    slug: realSlug,
  }
}

export async function getAllPosts(limit?: number) {
  const slugs = fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith('.mdx'))
  const posts = await Promise.all(slugs.map((slug) => getPostMetadata(slug)))
  // sort posts by date in descending order
  posts.sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
  return limit ? posts.slice(0, limit) : posts
}
