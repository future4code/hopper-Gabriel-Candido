const validaCPF = (CPF: string): string | boolean => {
  if(CPF.length < 14){
    return "Digite um CPF no formato XXX.XXX.XXX-XX"
  }

  const CPFsemPonto: string[] = CPF.replace(/[^\w\s]/gi, "").split('')
  const remove = CPFsemPonto.splice(9, 2)
  const CPFSTRING: string = CPFsemPonto.join("")
 
  let res1 = verificaCPF(CPFsemPonto, 10, 0)
  let res2 = verificaCPF(res1, 11, 0).join("")
  
  return res2 === CPFSTRING + remove.join("")
}

const verificaCPF = (CPF: string[], contador: number, total: number) => {
  CPF.forEach(num => {
    total += Number(num) * contador
    contador--
  })
  let modulo = 11 - (total % 11)

  let arr = modulo > 10 ? [0] : [modulo]
 
  CPF.push(arr.toString())

  return CPF
}

console.log(validaCPF("XXX.XXX.XXX-XX"))
