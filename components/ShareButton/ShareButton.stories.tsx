import { ComponentStory, ComponentMeta } from '@storybook/react'
import ShareButton from './ShareButton'

export default {
  title: 'Components/ShareButton',
  component: ShareButton,
  argTypes: {
    title: {
      defaultValue: 'My page title',
    },
    url: {
      defaultValue: 'https://www.google.com',
    },
  },
} as ComponentMeta<typeof ShareButton>

export const RendersCorrectly: ComponentStory<typeof ShareButton> = (args) => (
  <ShareButton {...args} />
)
