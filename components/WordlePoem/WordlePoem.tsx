import styles from './WordlePoem.module.scss'
import Word from './Word'

export interface Props {
  lines: string[]
  answer: string
}

export default function WordlePoem({ lines, answer }: Props) {
  return (
    <div className={styles.container}>
      {lines.map((line) => {
        const words = line.split(' ')
        return (
          <div className={styles.line}>
            {words.map((word) => (
              <Word word={word} answer={answer} />
            ))}
          </div>
        )
      })}
    </div>
  )
}
