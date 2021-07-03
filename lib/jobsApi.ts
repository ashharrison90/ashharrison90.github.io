import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const JOBS_DIR = join(process.cwd(), '__content__', 'about', 'jobs')

export interface JobData {
  company: string
  content: string
  jobTitle: string
  icon: string
  startDate: string
  endDate?: string
  website: string
}

export function getJobById(id: string) {
  const fullPath = join(JOBS_DIR, id)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const { company, jobTitle, icon, startDate, endDate, website } = data

  const jobData: JobData = {
    company,
    content,
    jobTitle,
    icon,
    startDate,
    website,
  }

  if (endDate) {
    jobData.endDate = endDate
  }

  return jobData
}

export function getAllJobs() {
  const jobIds = fs.readdirSync(JOBS_DIR).filter((file) => file.endsWith('.md'))
  const jobs = jobIds
    .map((id) => getJobById(id))
    // sort jobs by end date in descending order
    .sort((job1, job2) => {
      if (job1.endDate && job2.endDate) {
        return job1.endDate > job2.endDate ? -1 : 1
      } else if (job1.endDate && !job2.endDate) {
        return 1
      } else if (!job1.endDate && job2.endDate) {
        return -1
      } else {
        return job1.startDate > job2.startDate ? -1 : 1
      }
    })
  return jobs
}
