import Link from 'next/link'
import { useRouter } from 'next/router'
import classnames from 'classnames'
import styles from './Header.module.scss'

export interface Props {
  className: string
}

export default function Header({ className }: Props) {
  const router = useRouter()
  return (
    <nav className={classnames(
      styles.header,
      className
    )}>
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
  )
}