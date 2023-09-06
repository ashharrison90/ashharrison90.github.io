import classNames from 'classnames'
import { forwardRef, ReactNode } from 'react'

import styles from './JobSummary.module.scss'

const formatDate = (dateString: string | undefined) => {
  return dateString
    ? new Date(dateString).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
      })
    : 'Present'
}

export interface Props {
  children: ReactNode
  className?: string
  company: string
  jobTitle: string
  icon?: ReactNode
  startDate: string
  endDate?: string
  website: string
}

const JobSummary = forwardRef<HTMLDivElement, Props>(
  (
    {
      children,
      className,
      company,
      jobTitle,
      icon,
      startDate,
      endDate,
      website,
    },
    ref,
  ) => {
    return (
      <div
        data-testid='job-summary'
        ref={ref}
        className={classNames(styles.container, className)}
      >
        <div className={styles.header}>
          <div className={styles.title}>
            <a
              className={styles.companyLink}
              target='_blank'
              href={website}
              rel='noreferrer'
            >
              <h2 className={styles.company}>{company}</h2>
            </a>
            <div className={styles.jobTitle}>{jobTitle}</div>
            <div className={styles.date}>
              {formatDate(startDate)} - {formatDate(endDate)}
            </div>
          </div>
          <div className={styles.icon}>{icon}</div>
        </div>
        {children}
      </div>
    )
  },
)

export default JobSummary
