import { ComponentStory, ComponentMeta } from '@storybook/react'
import JobSummary from './JobSummary'
import Ibm from '../../__content__/about/jobs/assets/ibm.svg'
import Qinetiq from '../../__content__/about/jobs/assets/qinetiq.svg'
import Durham from '../../__content__/about/jobs/assets/durham.svg'
import Grafana from '../../__content__/about/jobs/assets/grafana.svg'

const icons = {
  ibm: <Ibm />,
  qinetiq: <Qinetiq />,
  durham: <Durham />,
  grafana: <Grafana />,
}

export default {
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
} as ComponentMeta<typeof JobSummary>

export const RendersCorrectly: ComponentStory<typeof JobSummary> = (args) => (
  <JobSummary {...args} />
)
