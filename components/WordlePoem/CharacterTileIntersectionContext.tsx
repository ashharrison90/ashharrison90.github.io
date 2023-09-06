import { createContext, ReactNode, useEffect, useRef } from 'react'

import styles from './CharacterTile.module.scss'

export const CharacterTileIntersectionContext =
  createContext<IntersectionObserver | null>(null)

export interface Props {
  children: ReactNode
}

export const CharacterTileIntersectionContextProvider = ({
  children,
}: Props) => {
  const observerRef = useRef(
    new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target
            if (target instanceof HTMLElement) {
              target.classList.remove(styles.hidden)
            }
          }
        })
      },
      {
        threshold: 1,
      },
    ),
  )

  useEffect(() => {
    const intersectionObserver = observerRef.current
    return () => intersectionObserver.disconnect()
  }, [])

  return (
    <CharacterTileIntersectionContext.Provider value={observerRef.current}>
      {children}
    </CharacterTileIntersectionContext.Provider>
  )
}
