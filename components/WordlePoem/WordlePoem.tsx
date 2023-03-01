import styles from './WordlePoem.module.scss'
import Word from './Word'

export interface Props {
  lines: string[]
  answer: string
}

export default function WordlePoem({ lines, answer }: Props) {
  return (
    <div className={styles.container}>
      {lines.map((line, index) => {
        const words = line.split(' ')
        return (
          <div key={index} className={styles.line}>
            {words.map((word, index) => (
              <Word key={index} word={word} answer={answer} />
            ))}
          </div>
        )
      })}
    </div>
  )
}
