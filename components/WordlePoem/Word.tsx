import styles from './Word.module.scss'
import CharacterTile, { MatchType } from './CharacterTile'

export interface Props {
  word: string
  answer: string
}

export default function Word({ word, answer }: Props) {
  const wordLower = word.toLowerCase()
  const answerLower = answer.toLowerCase()
  const characters = wordLower.split('')

  return (
    <div className={styles.word}>
      {characters.map((character, index) => {
        let matchType = MatchType.None
        if (character === answerLower[index]) {
          matchType = MatchType.Exact
        } else if (answerLower.includes(character)) {
          matchType = MatchType.Partial
        }
        return <CharacterTile character={character} matchType={matchType} />
      })}
    </div>
  )
}
