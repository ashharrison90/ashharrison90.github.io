import { ComponentStory, ComponentMeta } from '@storybook/react'

import Durham from '../../public/assets/about/durham.svg'
import Grafana from '../../public/assets/about/grafana.svg'
import Ibm from '../../public/assets/about/ibm.svg'
import Qinetiq from '../../public/assets/about/qinetiq.svg'

import JobSummary from './JobSummary'

const icons = {
  ibm: <Ibm />,
  qinetiq: <Qinetiq />,
  durham: <Durham />,
  grafana: <Grafana />,
}

const meta: ComponentMeta<typeof JobSummary> = {
  title: 'Components/JobSummary',
  component: JobSummary,
  argTypes: {
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
    className: {
      defaultValue: 'myCustomClass',
    },
    company: {
      defaultValue: 'Company',
    },
    icon: {
      defaultValue: 'grafana',
      mapping: icons,
      options: Object.keys(icons),
    },
    jobTitle: {
      defaultValue: 'Software Engineer',
    },
    startDate: {
      defaultValue: '2014-01-01T00:00:00.000Z',
    },
    endDate: {
      defaultValue: '2020-10-01T00:00:00.000Z',
    },
    website: {
      defaultValue: 'https://www.google.com',
    },
  },
}

export const RendersCorrectly: ComponentStory<typeof JobSummary> = (args) => (
  <JobSummary {...args} />
)

export default meta
