import { ReactNode } from 'react'
import styles from './JobSummary.module.scss'

const formatDate = (dateString: string) => {
  if (dateString === 'present') {
    return 'Present'
  } else {
    return (new Date(dateString)).toLocaleDateString(undefined ,{
      year: 'numeric',
      month: 'long'
    })
  }
}

export interface Props {
  children: ReactNode,
  className?: string,
  company: string,
  jobTitle: string,
  icon: ReactNode,
  startDate: string,
  endDate: string
}

export default function JobSummary({
  children,
  className,
  company,
  jobTitle,
  icon,
  startDate,
  endDate
}: Props) {
  return (
    <div className={className}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h2 className={styles.company}>{company}</h2>
          <div className={styles.jobTitle}>{jobTitle}</div>
          <div className={styles.date}>{formatDate(startDate)} - {formatDate(endDate)}</div>
        </div>
        <div className={styles.icon}>
          {icon}
        </div>
      </div>
      {children}
    </div>
  )
}
