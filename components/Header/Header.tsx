import { forwardRef } from 'react'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import classnames from 'classnames'
import PageLink from '../PageLink/PageLink'
import styles from './Header.module.scss'

const ThemeToggle = dynamic(() => import('../ThemeToggle/ThemeToggle'), {
  ssr: false,
})

const PAGE_LINKS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Posts',
    href: '/posts',
  },
]

export interface Props {
  show: boolean
}

const Header = forwardRef<HTMLElement, Props>(({ show }, ref) => {
  const router = useRouter()
  return (
    <header
      ref={ref}
      className={classnames(styles.header, {
        [styles.hide]: !show,
      })}
    >
      <ThemeToggle />

      <nav className={styles.nav}>
        {PAGE_LINKS.map(({ label, href }) => (
          <PageLink
            key={href}
            className={styles.pageLinks}
            href={href}
            isActive={router.pathname === href}
            label={label}
          />
        ))}
        {router.asPath.startsWith('/posts/') && (
          <div
            className={classnames(styles.postPageLinkContainer, {
              [styles.hide]: !show,
            })}
          >
            <PageLink
              key={router.asPath}
              className={styles.postPageLink}
              href={router.asPath}
              isActive
              label={router.asPath.replace('/posts', '')}
            />
          </div>
        )}
      </nav>
    </header>
  )
})

export default Header
