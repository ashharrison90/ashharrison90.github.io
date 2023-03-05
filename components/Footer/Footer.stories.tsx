import { ComponentStory, ComponentMeta } from '@storybook/react'

import Footer from './Footer'

const meta: ComponentMeta<typeof Footer> = {
  title: 'Components/Footer',
  component: Footer,
}

export const RendersCorrectly: ComponentStory<typeof Footer> = () => <Footer />

export default meta
