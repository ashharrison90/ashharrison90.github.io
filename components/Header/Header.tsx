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

export default function Header({ show }: Props) {
  const router = useRouter()
  return (
    <header
      className={classnames(styles.header, {
        [styles.hide]: !show,
      })}
    >
      <ThemeToggle />

      <nav>
        <div>
          {PAGE_LINKS.map(({ label, href }) => (
            <PageLink
              key={href}
              className={styles.pageLinks}
              href={href}
              isActive={router.pathname === href}
              label={label}
            />
          ))}
        </div>
        {router.asPath.startsWith('/posts/') && (
          <PageLink
            key={router.asPath}
            className={classnames(styles.postPageLink, {
              [styles.hide]: !show,
            })}
            href={router.asPath}
            isActive
            label={router.asPath.replace('/posts', '')}
          />
        )}
      </nav>
    </header>
  )
}
