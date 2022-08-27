export enum DESCRIPTION {
  TRANSFER = "TRANSFER",
  BILL = "PAY BILL",
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

export const clients: Clients[] =  [
  {
    name: "Gabriel",
    CPF: "123.456.789-10",
    bornDate: "01/09/1998",
    accountBalance: 999999999999999.00,
    statement: [{value: -100.00, date: "25/08/2022", description: DESCRIPTION.TRANSFER}]
  }
]