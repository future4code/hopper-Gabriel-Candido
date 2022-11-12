export type user = {
   id: string
   email: string
   password: string
}

export type userAuthenticationData = {
   id: string
}

export interface UserInputDTO {
   email: string,
   password: string
}
