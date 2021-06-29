import { ComponentStory, ComponentMeta } from '@storybook/react'
import PageLink from './PageLink'

export default {
  title: 'Components/PageLink',
  component: PageLink,
  argTypes: {
    className: {
      defaultValue: 'myCustomClass',
    },
    href: {
      defaultValue: 'about',
    },
    label: {
      defaultValue: 'label',
    },
  },
} as ComponentMeta<typeof PageLink>

export const RendersCorrectly: ComponentStory<typeof PageLink> = (args) => (
  <PageLink {...args} />
)
