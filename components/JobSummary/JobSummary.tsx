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
  company: string,
  jobTitle: string,
  icon: ReactNode,
  startDate: string,
  endDate: string
}

export default function JobSummary({
  children,
  company,
  jobTitle,
  icon,
  startDate,
  endDate
}: Props) {
  return (
    <>
      <h2>{company}</h2>
      <div>{jobTitle}</div>
      <div className={styles.date}>{formatDate(startDate)} - {formatDate(endDate)}</div>
      <div className={styles.icon}>
        {icon}
      </div>
      {/* <img className={styles.icon} src={icon} /> */}
      {children}
    </>
  )
}
