import { currDate } from "./currDate"

const calc = (value: string) => {
  const spliter: string[] = value.split("/")
  const DAY: number = Number(spliter[0])
  const MONTH: number = Number(spliter[1])
  const YEAR: number = Number(spliter[2])
  
  const { currDay, currMonth, currYear } = currDate()

  let date: number

  currMonth >= MONTH && currDay >= DAY ? date = currYear - YEAR : date = currYear - YEAR - 1

  return date
}

export const validate = (born: string): boolean => {
  const age = calc(born)

  return age >= 18 ? true : false
}
