import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const jobsDirectory = join(process.cwd(), '_jobs')

export interface JobData {
  company: string,
  content: string,
  jobTitle: string,
  icon: string,
  startDate: string,
  endDate: string
}

export function getJobById(id: string) {
  const fullPath = join(jobsDirectory, id)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const {
    company,
    jobTitle,
    icon,
    startDate,
    endDate
  } = data

  return {
    company,
    content,
    jobTitle,
    icon,
    startDate,
    endDate
  }
}

export function getAllJobs() {
  const jobIds = fs.readdirSync(jobsDirectory)
  const jobs = jobIds
    .map((id) => getJobById(id))
    // sort jobs by end date in descending order
    .sort((post1, post2) => (post1.endDate > post2.endDate ? -1 : 1))
  return jobs
}