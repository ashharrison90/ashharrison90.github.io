import { ReactNode } from 'react'
import classnames from 'classnames'
import styles from './SocialLink.module.scss'

export interface Props {
  className?: string
  link: string
  icon: ReactNode
}

export default function SocialLink({ className, link, icon }: Props) {
  return (
    <a
      className={classnames(styles.link, className)}
      href={link}
      target='_blank'
    >
      {icon}
    </a>
  )
}
