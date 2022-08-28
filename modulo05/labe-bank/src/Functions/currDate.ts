export const currDate = () => {
  const currDate: Date = new Date()
  const currDay: number = currDate.getDate()
  const currMonth: number = currDate.getMonth() + 1
  const currYear: number = currDate.getFullYear()

  return { currDay, currMonth, currYear }
} 
