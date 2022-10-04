export enum DESCRIPTION {
  TRANSFER = "TRANSFER",
  PAYMENT = "PAYMENT",
  SUCESSTRANSFER = "SUCESSFULL TRANSFER",
  SUCESSFULLPAYMENT = "SUCESSFULL PAYMENT",
  DEPOSIT = "DEPOSIT",
}

type Statement = {
  value: number,
  date: string,
  description: DESCRIPTION 
}

type Clients = {
  name: string,
  CPF: string,
  bornDate: string,
  accountBalance: number,
  statement: Statement[]
}

export const clients: Clients[] =  []
