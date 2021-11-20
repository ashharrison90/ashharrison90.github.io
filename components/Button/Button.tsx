import Link from 'next/link'
import { ReactNode } from 'react'
import classnames from 'classnames'
import styles from './Button.module.scss'

export enum ButtonType {
  Primary = 'primary',
  Secondary = 'secondary',
  Icon = 'icon',
}

interface ButtonBaseProps {
  ariaLabel?: string
  children: ReactNode
  className?: string
  isActive?: boolean
  kind?: ButtonType
}

interface ButtonProps extends ButtonBaseProps {
  onClick?: () => void
  href?: never
  target?: never
}

interface ButtonLinkProps extends ButtonBaseProps {
  onClick?: never
  href?: string
  target?: string
}

export type Props = ButtonProps | ButtonLinkProps

export default function Button({
  ariaLabel,
  children,
  className,
  href,
  isActive,
  kind = ButtonType.Primary,
  onClick,
  target,
}: Props) {
  if (!href) {
    return (
      <button
        aria-label={ariaLabel}
        onClick={onClick}
        className={classnames(styles.button, className, {
          [styles.isActive]: isActive,
          [styles.buttonPrimary]: kind === ButtonType.Primary,
          [styles.buttonSecondary]: kind === ButtonType.Secondary,
          [styles.buttonIcon]: kind === ButtonType.Icon,
        })}
      >
        {children}
      </button>
    )
  } else {
    return (
      <Link href={href}>
        <a
          aria-label={ariaLabel}
          rel='noreferrer'
          role='link'
          target={target}
          className={classnames(styles.button, className, {
            [styles.isActive]: isActive,
            [styles.buttonPrimary]: kind === ButtonType.Primary,
            [styles.buttonSecondary]: kind === ButtonType.Secondary,
            [styles.buttonIcon]: kind === ButtonType.Icon,
          })}
        >
          {children}
        </a>
      </Link>
    )
  }
}
