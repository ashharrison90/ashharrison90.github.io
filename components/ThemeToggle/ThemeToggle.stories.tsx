import { StoryFn, Meta } from '@storybook/react'

import ThemeToggle from './ThemeToggle'

const meta: Meta<typeof ThemeToggle> = {
  title: 'Components/Header/ThemeToggle',
  component: ThemeToggle,
}

export const Story: StoryFn<typeof ThemeToggle> = () => <ThemeToggle />

export default meta
