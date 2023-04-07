import { StoryFn, Meta } from '@storybook/react'

import Footer from './Footer'

const meta: Meta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
}

export const Story: StoryFn<typeof Footer> = () => <Footer />

export default meta
