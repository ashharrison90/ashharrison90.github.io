import { ComponentStory, ComponentMeta } from '@storybook/react'
import SocialLink from './SocialLink'
import Envelope from '../Footer/assets/envelope.svg'
import Facebook from '../Footer/assets/facebook.svg'
import Github from '../Footer/assets/github.svg'
import Instagram from '../Footer/assets/instagram.svg'
import Linkedin from '../Footer/assets/linkedin.svg'
import Twitter from '../Footer/assets/twitter.svg'

const icons = {
  email: <Envelope />,
  facebook: <Facebook />,
  github: <Github />,
  instagram: <Instagram />,
  linkedin: <Linkedin />,
  twitter: <Twitter />,
}

export default {
  title: 'Components/Footer/SocialLink',
  component: SocialLink,
  argTypes: {
    className: {
      defaultValue: 'myCustomClass',
    },
    icon: {
      defaultValue: 'facebook',
      mapping: icons,
      options: Object.keys(icons),
    },
    label: {
      defaultValue: 'myAccessibleLabel',
    },
    link: {
      defaultValue: 'https://www.google.com',
    },
  },
} as ComponentMeta<typeof SocialLink>

export const RendersCorrectly: ComponentStory<typeof SocialLink> = (args) => (
  <SocialLink {...args} />
)
