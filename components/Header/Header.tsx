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
  className: string
}

export default function Header({ className }: Props) {
  const router = useRouter()
  return (
    <div className={classnames(styles.header, className)}>
      <ThemeToggle />

      <nav>
        {PAGE_LINKS.map(({ label, href }) => (
          <PageLink
            key={href}
            className={styles.pageLinks}
            href={href}
            isActive={router.pathname === href}
            label={label}
          />
        ))}
      </nav>
    </div>
  )
}
