import classnames from 'classnames'
import { useEffect, useRef } from 'react'
import styles from './CharacterTile.module.scss'

export const enum MatchType {
  Exact = 'exact',
  Partial = 'partial',
  None = 'none',
}

export interface Props {
  character: string
  index?: number
  matchType: MatchType
}

export default function CharacterTile({
  character,
  index = 0,
  matchType,
}: Props) {
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target
            if (target instanceof HTMLSpanElement) {
              target.style.color = '#fff'
              target.style.transform = 'none'
            }
          }
        })
      },
      {
        threshold: 1,
      }
    )
    if (ref.current) {
      intersectionObserver.observe(ref.current)
    }
    return () => intersectionObserver.disconnect()
  }, [])

  return (
    <span
      style={{ transitionDelay: `${index * 0.1}s` }}
      ref={ref}
      className={classnames(styles.character, {
        [styles.matchNone]: matchType === MatchType.None,
        [styles.matchExact]: matchType === MatchType.Exact,
        [styles.matchPartial]: matchType === MatchType.Partial,
      })}
    >
      {character}
    </span>
  )
}
