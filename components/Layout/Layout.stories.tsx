import { ComponentStory, ComponentMeta } from '@storybook/react'
import Layout from './Layout'

export default {
  title: 'Components/Layout',
  component: Layout,
  argTypes: {
    backgroundContent: {
      defaultValue: <div style={{ backgroundColor: 'red' }} />,
    },
    backgroundHeight: {
      defaultValue: 50,
    },
    children: {
      defaultValue: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      ),
    },
    foregroundContent: <h1>HELLO</h1>,
  },
} as ComponentMeta<typeof Layout>

export const RendersCorrectly: ComponentStory<typeof Layout> = (args) => (
  <Layout {...args} />
)
