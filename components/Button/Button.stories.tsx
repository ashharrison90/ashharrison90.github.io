import { StoryFn, Meta } from '@storybook/react'

import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Click me',
    className: 'myCustomClass',
    href: 'https://www.google.com',
  },
}

export const Story: StoryFn<typeof Button> = (args) => <Button {...args} />

export default meta
