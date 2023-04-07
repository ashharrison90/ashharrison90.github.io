import { StoryFn, Meta } from '@storybook/react'

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

const meta: Meta<typeof JobSummary> = {
  title: 'Components/JobSummary',
  component: JobSummary,
  argTypes: {
    icon: {
      control: 'select',
      mapping: icons,
      options: Object.keys(icons),
    },
  },
  args: {
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
    className: 'myCustomClass',
    company: 'Company',
    icon: 'grafana',
    jobTitle: 'Software Engineer',
    startDate: '2014-01-01T00:00:00.000Z',
    endDate: '2020-10-01T00:00:00.000Z',
    website: 'https://www.google.com',
  },
}

export const Story: StoryFn<typeof JobSummary> = (args) => (
  <JobSummary {...args} />
)

export default meta
