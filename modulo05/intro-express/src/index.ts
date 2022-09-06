// Ex 01 -

import express, {Request, Response} from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

//http://localhost:3003
app.get("/", (req: Request, res: Response) => {
  res.send('Welcome to Gatitos Express!')
})

// Ex 02 -

type Users = {
  id: string,
  name: string,
  phone: string,
  email: string,
  website: string,
}

// Ex 03 -

const arrUsers: Users[] = [
  {
    id: '1',
    name: 'Yummi',
    phone: '(01) 00101-0101',
    email: 'yummigata@email.com',
    website: 'https://www.petlove.com.br/gatos',
  },
  {
    id: '2',
    name: 'Simba',
    phone: '(02) 00202-0202',
    email: 'simbagatao@email.com',
    website: 'https://www.petz.com.br/gato',
  },
  {
    id: '3',
    name: 'Alex',
    phone: '(03) 00303-0303',
    email: 'alexgatogatoso@email.com',
    website: 'https://www.cobasi.com.br/c/gatos',
  }
]

// Ex 4 -
// http://localhost:3003/users
app.get("/users", (req: Request, res: Response) => {
  res.send(arrUsers)
})

// Ex 5 -

type Posts = {
  id: string,
  title: string,
  body: string,
  userId: string
}

// Ex 6 -

const arrPosts: Posts[] = [
  {
    id: '1',
    title: 'Gatoso',
    body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    userId: '3'
  },
  {
    id: '2',
    title: 'Linda de Bonita',
    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    userId: '1'
  },
  {
    id: '3',
    title: 'O Brabo',
    body: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    userId: '2'
  }
]

// Ex 7 -
// http://localhost:3003/posts
app.get("/posts", (req: Request, res: Response) => {
  res.send(arrPosts)
})

// Ex 8 -
// http://localhost:3003/users/posts?userId
app.get("/users/posts", (req: Request, res: Response) => {
  const userId = req.query.userId
  if(!userId) {
    res.status(400).send("userId Obrigatório!")
  } 
  const arrEscolhido = arrPosts.filter(post => post.userId === userId)
  res.send(arrEscolhido)
})

// Ex 9 -
// http://localhost:3003/users/posts?postId
app.delete("/users/posts", (req: Request, res: Response) => {
  const postId = req.query.postId
  if(!postId) {
    res.status(400).send("O postId é Obrigatório!")
  } 

  const postDelete = arrPosts.filter(post => post.id !== postId)
  res.status(200).send(postDelete)
})

// Ex 10 -
// http://localhost:3003/users?userId
app.delete("/users", (req: Request, res: Response) => {
  const userId = req.query.userId
  if(!userId) {
    res.status(400).send("userId Obrigatório!")
  } 

  const userDelete = arrUsers.filter(user => user.id !== userId)
  res.status(200).send(userDelete)
})

// Ex 11 - 
// https://app.getpostman.com/run-collection/ba521d25db95b07a1d74?action=collection%2Fimport

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003")
})
