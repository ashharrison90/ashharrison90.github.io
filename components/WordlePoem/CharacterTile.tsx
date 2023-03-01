import classnames from 'classnames'
import { useContext, useEffect, useRef } from 'react'
import { CharacterTileIntersectionContext } from './CharacterTileIntersectionContext'
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
  const intersectionObserver = useContext(CharacterTileIntersectionContext)

  useEffect(() => {
    if (ref.current && intersectionObserver) {
      intersectionObserver.observe(ref.current)
    }
  }, [intersectionObserver])

  return (
    <span
      data-testid='wordle-character'
      style={{ transitionDelay: `${index * 0.1}s` }}
      ref={ref}
      className={classnames(styles.character, {
        [styles.hidden]: Boolean(intersectionObserver),
        [styles.matchNone]: matchType === MatchType.None,
        [styles.matchExact]: matchType === MatchType.Exact,
        [styles.matchPartial]: matchType === MatchType.Partial,
      })}
    >
      {character}
    </span>
  )
}
