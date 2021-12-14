import {
  getDiffTimeBetweenCurrentDate
} from './date'

describe('Date utils', () => {
  it('should return null when pass a null param', () => {
    expect(getDiffTimeBetweenCurrentDate(null)).toBe(null)
  })

  it('should return empty string when pass an undefined param', () => {
    expect(getDiffTimeBetweenCurrentDate(undefined)).toBe('')
  })

  it('should return difference of days when pass a correct param', () => {
    expect(getDiffTimeBetweenCurrentDate('10-01-2021', new Date('12-01-2021'))).toBe('61 dias atrás')
  })
})
