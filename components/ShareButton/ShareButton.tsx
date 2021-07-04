import styles from './ShareButton.module.scss'
import Share from '@fortawesome/fontawesome-free/svgs/solid/share-alt.svg'

export interface Props {
  title: string
  url: string
}

export default function ShareButton({ title, url }: Props) {
  const onClick = async () => {
    try {
      await navigator.share({
        title,
        url,
      })
    } catch {}
  }

  return (
    <button aria-label='Share' className={styles.button} onClick={onClick}>
      <Share />
    </button>
  )
}
