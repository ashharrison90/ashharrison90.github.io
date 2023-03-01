import React, { useEffect, useRef } from 'react'
import styles from './CharacterTile.module.scss'

export const CharacterTileIntersectionContext =
  React.createContext<IntersectionObserver | null>(null)

export interface Props {
  children: React.ReactNode
}

export const CharacterTileIntersectionContextProvider = ({
  children,
}: Props) => {
  const observer = useRef(
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
      }
    )
  )

  useEffect(() => {
    return () => observer.current.disconnect()
  }, [])

  return (
    <CharacterTileIntersectionContext.Provider value={observer.current}>
      {children}
    </CharacterTileIntersectionContext.Provider>
  )
}
