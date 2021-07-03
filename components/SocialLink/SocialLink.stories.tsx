import { ComponentStory, ComponentMeta } from '@storybook/react'
import SocialLink from './SocialLink'

export default {
  title: 'Components/SocialLink',
  component: SocialLink,
  argTypes: {
    ariaLabel: {
      defaultValue: 'myAccessibleLabel',
    },
    className: {
      defaultValue: 'myCustomClass',
    },
    type: {
      defaultValue: 'facebook',
      control: {
        options: [
          'email',
          'facebook',
          'github',
          'instagram',
          'linkedin',
          'reddit',
          'twitter',
        ],
        type: 'select',
      },
    },
    link: {
      defaultValue: 'https://www.google.com',
    },
  },
} as ComponentMeta<typeof SocialLink>

export const RendersCorrectly: ComponentStory<typeof SocialLink> = (args) => (
  <SocialLink {...args} />
)
