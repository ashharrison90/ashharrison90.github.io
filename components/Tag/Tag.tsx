import Highlighter from 'react-highlight-words'

export interface Props {
  label: string
  searchString?: string
}

export default function Tag({ label, searchString }: Props) {
  return (
    <Highlighter
      searchWords={searchString?.split(' ') ?? []}
      textToHighlight={`#${label}`}
    />
  )
}
