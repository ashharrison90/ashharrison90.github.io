import { StoryFn, Meta } from '@storybook/react'

import Layout from './Layout'

const meta: Meta<typeof Layout> = {
  title: 'Components/Layout',
  component: Layout,
  args: {
    backgroundContent: (
      <div
        style={{
          backgroundColor: 'red',
          height: '100%',
          width: '100%',
          position: 'absolute',
        }}
      />
    ),
    backgroundHeight: 50,
    children: (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
    ),
    foregroundContent: <h1>HELLO</h1>,
    hideHeaderUntilScroll: false,
    metaDescription: 'The description seen on Google',
    metaTitle: 'The title seen on Google',
  },
}

export const Story: StoryFn<typeof Layout> = (args) => <Layout {...args} />

export default meta
