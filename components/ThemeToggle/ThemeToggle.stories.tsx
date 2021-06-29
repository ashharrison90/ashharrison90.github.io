import { ComponentStory, ComponentMeta } from '@storybook/react'
import ThemeToggle from './ThemeToggle'

export default {
  title: 'Components/Header/ThemeToggle',
  component: ThemeToggle,
} as ComponentMeta<typeof ThemeToggle>

export const RendersCorrectly: ComponentStory<typeof ThemeToggle> = () => (
  <ThemeToggle />
)
