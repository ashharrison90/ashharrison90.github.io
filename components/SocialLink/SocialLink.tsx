import { ReactNode } from 'react'
import classnames from 'classnames'
import styles from './SocialLink.module.scss'

export interface Props {
  className?: string
  label: string
  link: string
  icon: ReactNode
}

export default function SocialLink({ className, label, link, icon }: Props) {
  return (
    <a
      aria-label={label}
      className={classnames(styles.link, className)}
      href={link}
      target='_blank'
    >
      {icon}
    </a>
  )
}
