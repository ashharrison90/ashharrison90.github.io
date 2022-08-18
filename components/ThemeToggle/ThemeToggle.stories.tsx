import { ComponentStory, ComponentMeta } from '@storybook/react'
import ThemeToggle from './ThemeToggle'

const meta: ComponentMeta<typeof ThemeToggle> = {
  title: 'Components/Header/ThemeToggle',
  component: ThemeToggle,
}

export const RendersCorrectly: ComponentStory<typeof ThemeToggle> = () => (
  <ThemeToggle />
)

export default meta
