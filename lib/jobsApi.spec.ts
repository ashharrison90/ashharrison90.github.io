import { getAllJobs, getJobById } from './jobsApi'
import fs from 'fs'

describe('jobsApi', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('getJobById', () => {
    const mockCompany = 'mockCompany'
    const mockJobTitle = 'mockJobTitle'
    const mockIcon = 'mockIcon'
    const mockStartDate = 'mockStartDate'
    const mockWebsite = 'mockWebsite'
    const mockContent = 'mockContent'
    let readFileSpy: jest.SpyInstance

    beforeEach(() => {
      readFileSpy = jest.spyOn(fs, 'readFileSync')
    })

    afterEach(() => {
      readFileSpy.mockRestore()
    })

    it('looks in the correct folder for the specified post', () => {
      readFileSpy.mockImplementation(
        () =>
          `---
company: ${mockCompany}
jobTitle: ${mockJobTitle}
icon: ${mockIcon}
startDate: ${mockStartDate}
website: ${mockWebsite}
---
${mockContent}`
      )

      const result = getJobById('foo')
      expect(readFileSpy).toHaveBeenCalledWith(
        expect.stringMatching('__content__/about/jobs/foo'),
        'utf8'
      )
      expect(result).toEqual({
        company: mockCompany,
        content: mockContent,
        jobTitle: mockJobTitle,
        icon: mockIcon,
        startDate: mockStartDate,
        website: mockWebsite,
      })
    })

    it("includes the endDate if it's specified", () => {
      const mockEndDate = 'mockEndDate'
      readFileSpy.mockImplementation(
        () =>
          `---
company: ${mockCompany}
jobTitle: ${mockJobTitle}
icon: ${mockIcon}
startDate: ${mockStartDate}
endDate: ${mockEndDate}
website: ${mockWebsite}
---
${mockContent}`
      )

      const result = getJobById('foo')
      expect(result).toEqual({
        company: mockCompany,
        content: mockContent,
        jobTitle: mockJobTitle,
        icon: mockIcon,
        startDate: mockStartDate,
        endDate: mockEndDate,
        website: mockWebsite,
      })
    })
  })

  describe('getAllJobs', () => {
    describe('when sorting jobs', () => {
      let readdirSyncSpy: jest.SpyInstance
      let readFileSpy: jest.SpyInstance

      beforeEach(() => {
        readdirSyncSpy = jest
          .spyOn(fs, 'readdirSync')
          .mockReturnValue(new Array(2).fill('.md'))
        readFileSpy = jest.spyOn(fs, 'readFileSync')
      })

      afterEach(() => {
        readdirSyncSpy.mockRestore()
        readFileSpy.mockRestore()
      })

      describe('when both jobs have an endDate', () => {
        it('will order them such that the job with the latest end date is first', () => {
          const job1 = `---
startDate: '2016-09-01T00:00:00.000Z'
endDate: '2018-09-01T00:00:00.000Z'
---
`
          const job2 = `---
startDate: '2013-09-01T00:00:00.000Z'
endDate: '2016-09-01T00:00:00.000Z'
---
`
          const expectedResult = [
            {
              content: '',
              startDate: '2016-09-01T00:00:00.000Z',
              endDate: '2018-09-01T00:00:00.000Z',
            },
            {
              content: '',
              startDate: '2013-09-01T00:00:00.000Z',
              endDate: '2016-09-01T00:00:00.000Z',
            },
          ]

          readFileSpy.mockReturnValueOnce(job1).mockReturnValueOnce(job2)
          expect(getAllJobs()).toEqual(expectedResult)

          // Check the other order
          readFileSpy.mockReturnValueOnce(job2).mockReturnValueOnce(job1)
          expect(getAllJobs()).toEqual(expectedResult)
        })
      })

      describe("when one job doesn't have an end date", () => {
        it('will order them such that the job without the end date is first', () => {
          const job1 = `---
startDate: '2016-09-01T00:00:00.000Z'
---
`
          const job2 = `---
startDate: '2013-09-01T00:00:00.000Z'
endDate: '2016-09-01T00:00:00.000Z'
---
`
          const expectedResult = [
            {
              content: '',
              startDate: '2016-09-01T00:00:00.000Z',
            },
            {
              content: '',
              startDate: '2013-09-01T00:00:00.000Z',
              endDate: '2016-09-01T00:00:00.000Z',
            },
          ]

          readFileSpy.mockReturnValueOnce(job1).mockReturnValueOnce(job2)
          expect(getAllJobs()).toEqual(expectedResult)

          // Check the other order
          readFileSpy.mockReturnValueOnce(job2).mockReturnValueOnce(job1)
          expect(getAllJobs()).toEqual(expectedResult)
        })
      })

      describe('when neither job has an endDate', () => {
        it('will order them such that the job with the latest start date is first', () => {
          const job1 = `---
startDate: '2016-09-01T00:00:00.000Z'
---
`
          const job2 = `---
startDate: '2013-09-01T00:00:00.000Z'
---
`
          const expectedResult = [
            {
              content: '',
              startDate: '2016-09-01T00:00:00.000Z',
            },
            {
              content: '',
              startDate: '2013-09-01T00:00:00.000Z',
            },
          ]

          readFileSpy.mockReturnValueOnce(job1).mockReturnValueOnce(job2)
          expect(getAllJobs()).toEqual(expectedResult)

          // Check the other order
          readFileSpy.mockReturnValueOnce(job2).mockReturnValueOnce(job1)
          expect(getAllJobs()).toEqual(expectedResult)
        })
      })
    })
  })
})
