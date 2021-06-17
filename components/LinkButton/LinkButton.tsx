import Link from 'next/link'
import { ReactNode } from 'react'
import classnames from 'classnames'
import styles from './LinkButton.module.scss'

export interface Props {
  children: ReactNode
  className?: string
  href: string
}

export default function LinkButton({ children, className, href }: Props) {
  return (
    <Link href={href}>
      <a role='button' className={classnames(styles.button, className)}>
        {children}
      </a>
    </Link>
  )
}
