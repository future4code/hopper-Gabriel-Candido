export const dateValidate = (param: string) => {
  const strDate: string[] = param.split('/')

  const currentDate = new Date(Number(strDate[2]), (Number(strDate[1]) -1), Number(strDate[0]))
  const dateNow = new Date()

  return currentDate < dateNow ? true : false
}
