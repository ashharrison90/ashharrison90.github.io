import { ComponentStory, ComponentMeta } from '@storybook/react'
import Footer from './Footer'

export default {
  title: 'Components/Footer',
  component: Footer,
} as ComponentMeta<typeof Footer>

export const RendersCorrectly: ComponentStory<typeof Footer> = () => <Footer />
