import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import classnames from 'classnames'
import styles from './Header.module.scss'

const ThemeToggle = dynamic(() => import('../ThemeToggle/ThemeToggle'), {
  ssr: false,
})

export interface Props {
  className: string
}

export default function Header({ className }: Props) {
  const router = useRouter()
  return (
    <div className={classnames(
      styles.header,
      className
    )}>
      <ThemeToggle />

      <nav className={styles.pageLinks}>
        <Link href='/'>
          <a className={classnames(
            styles.pageLink,
            {[styles.activePage]: router.pathname === '/'}
          )}>home</a>
        </Link>
        <Link href='/about'>
          <a className={classnames(
            styles.pageLink,
            {[styles.activePage]: router.pathname === '/about'}
          )}>about</a>
        </Link>
        <Link href='/posts'>
          <a className={classnames(
            styles.pageLink,
            {[styles.activePage]: router.pathname === '/posts'}
          )}>posts</a>
        </Link>
      </nav>
    </div>
  )
}