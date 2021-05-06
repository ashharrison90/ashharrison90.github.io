import { ReactNode } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import styles from './Layout.module.scss'

export interface Props {
  buildTimestamp: number,
  children: ReactNode
}

export default function Layout({ buildTimestamp, children }: Props) {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>{children}</div>
      <Footer
        footnote={`Last updated: ${new Date(buildTimestamp).toLocaleDateString()}`}
      />
    </div>
  )
}