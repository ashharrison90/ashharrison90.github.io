import classnames from 'classnames'
import Link from 'next/link'
import { HTMLAttributeAnchorTarget, ReactNode } from 'react'

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
  target?: HTMLAttributeAnchorTarget
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
        disabled={isActive}
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
      <Link
        href={href}
        aria-label={ariaLabel}
        rel={target ? 'noreferrer' : undefined}
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
      </Link>
    )
  }
}
