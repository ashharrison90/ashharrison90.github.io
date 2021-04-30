import { useRouter } from 'next/router'
import ErrorPage from 'next/error'
import { getPostBySlug, getAllPosts, PostData } from '../../lib/api'
import Head from 'next/head'
import markdownToHtml from '../../lib/markdownToHtml'
import { GetStaticPropsContext } from 'next'

export default function Post({ post }: { post: PostData }) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <div>
      {router.isFallback ? (
        <div>Loading…</div>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>
                {post.title}
              </title>
            </Head>
            <div>{post.title}</div>
            <div>{post.coverImage}</div>
            <div>{post.date}</div>
            <div>{post.author?.name}</div>
            <div
              dangerouslySetInnerHTML={{ __html: post.content ?? '' }}
            />
          </article>
        </>
      )}
    </div>
  )
}

export async function getStaticProps({ params }: GetStaticPropsContext<{slug: string}>) {
  const post = getPostBySlug(params!.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'coverImage',
  ])
  const content = await markdownToHtml(post.content || '')

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug'])

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      }
    }),
    fallback: false,
  }
}
