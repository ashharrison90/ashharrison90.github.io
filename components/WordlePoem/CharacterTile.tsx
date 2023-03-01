import classnames from 'classnames'
import styles from './CharacterTile.module.scss'

export const enum MatchType {
  Exact = 'exact',
  Partial = 'partial',
  None = 'none',
}

export interface Props {
  matchType: MatchType
  character: string
}

export default function CharacterTile({ character, matchType }: Props) {
  return (
    <span
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
