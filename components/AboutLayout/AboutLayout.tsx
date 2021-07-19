import Head from 'next/head'
import { ReactNode } from 'react'
import Layout from '../Layout/Layout'

export interface Props {
  children: ReactNode
}

export default function AboutLayout({ children }: Props) {
  return (
    <Layout>
      <Head>
        <title>about</title>
        <meta name='description' content='All about me!' />
      </Head>
      {children}
    </Layout>
  )
}
