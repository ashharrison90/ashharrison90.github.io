import classnames from 'classnames'
import dynamic from 'next/dynamic'
import { useRouter } from 'next/router'
import { forwardRef } from 'react'

import Button, { ButtonType } from '../Button/Button'

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
          <Button
            key={href}
            className={styles.pageLinks}
            href={href}
            isActive={router.pathname === href}
            kind={ButtonType.Secondary}
          >
            {label}
          </Button>
        ))}
        {router.asPath.startsWith('/posts/') && (
          <div
            className={classnames(styles.postPageLinkContainer, {
              [styles.hide]: !show,
            })}
          >
            <Button
              key={router.asPath}
              className={styles.postPageLink}
              href={router.asPath}
              isActive
              kind={ButtonType.Secondary}
            >
              {router.asPath.replace('/posts', '')}
            </Button>
          </div>
        )}
      </nav>
    </header>
  )
})
Header.displayName = 'Header'

export default Header
