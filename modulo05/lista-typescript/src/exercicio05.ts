enum ROLE {
  USER = "user",
  ADMIN = "admin"
}

type Users = {
  name: string,
  email: string,
  role: ROLE
}

const arrUsers: Users[] = [
	{name: "Rogério", email: "roger@email.com", role: ROLE.USER},
	{name: "Ademir", email: "ademir@email.com", role: ROLE.ADMIN},
	{name: "Aline", email: "aline@email.com", role: ROLE.USER},
	{name: "Jéssica", email: "jessica@email.com", role: ROLE.USER},  
	{name: "Adilson", email: "adilson@email.com", role: ROLE.USER},  
	{name: "Carina", email: "carina@email.com", role: ROLE.ADMIN}      
] 

const consultaUsers = (arr: Users[]) => {
  return arr
  .filter(user => user.role === "admin")
  .map(user => user.email)
}

console.log(consultaUsers(arrUsers))
