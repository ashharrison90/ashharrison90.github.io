import Link from 'next/link'
import classnames from 'classnames'
import styles from './PageLink.module.scss'

export interface Props {
  className?: string
  href: string
  isActive: boolean
  label: string
}

export default function PageLink({ className, href, isActive, label }: Props) {
  return (
    <Link href={href}>
      <a
        className={classnames(styles.pageLink, className, {
          [styles.activePage]: isActive,
        })}
      >
        {label}
      </a>
    </Link>
  )
}
