import express, {Request, Response} from 'express';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

// Ex 1 -
// http://localhost:3003/ping
app.get("/ping", (req: Request, res: Response) => {
  res.send('Pong! 🏓')
})

// Ex 2 -

type Afazeres = {
  "userId": string,
  "id": string,
  "title": string,
  "completed": string
}

// Ex 3 -

const afazeres: Afazeres[] = [
  {
    "userId": "1",
    "id": "1",
    "title": "Lavar Roupa",
    "completed": 'false'
  },
  {
    "userId": "1",
    "id": "2",
    "title": "Lavar Roupa",
    "completed": 'true'
  },
  {
    "userId": "2",
    "id": "1",
    "title": "Ir ao supermercado",
    "completed": 'false'
  }
]

// Ex 4 -
// http://localhost:3003/afazeres?choice
app.get('/afazeres', (req: Request, res: Response) => {
  const andamento = req.query.choice?.toString()
  if(!andamento) {
    res.send("Choice obrigatório! (true ou false)")
  } 

  const value: Afazeres[] = afazeres.filter(afazer => afazer.completed === andamento)
  res.send(value)
})

// Ex 5 -
// http://localhost:3003/afazeres
app.post('/afazeres', (req: Request, res: Response) => {
  const { userId, title }: Afazeres = req.body
  if(!userId || !title) {
    res.status(400).send("Algum argumento está faltando no body!")
  }
  
  afazeres.push({ userId, id: Date.now().toString(), title, completed: 'false' })
  res.status(200).send({ afazeres })
})

// Ex 6 -
// http://localhost:3003//afazeres/edit?userId&id
app.put('/afazeres/edit', (req: Request, res: Response) => {
  const userId = req.query.userId
  const id = req.query.id
  const status = req.body.status

  if(!userId || !id) {
    res.status(400).send("Querys Obrigatórias!")
  }
  if(!status) {
    res.status(400).send("Status do Body Obrigatório!")
  }

  afazeres.forEach(afazer => {
    if(afazer.userId === userId) {
      if(afazer.id === id){
        afazer.completed = status
      }
    }
  })

  res.status(200).send(afazeres)
})

// Ex 7 -
// http://localhost:3003/afazeres?userId&id
app.delete("/afazeres", (req: Request, res: Response) => {
  const userId = req.query.userId
  const id = req.query.id

  if(!userId || !id) {
    res.status(400).send("Querys Obrigatórias!")
  }

  afazeres.filter((afazer, i) => {
    if (afazer.userId === userId) {
      if (afazer.id === id) {
        afazeres.splice(i, 1)
      }
    }
    return afazer
  })

  res.status(200).send(afazeres)
})

// Ex 8 -
// http://localhost:3003/afazeres/user/:userId
app.get("/afazeres/user/:userId", (req: Request, res: Response) => {
  const { userId } = req.params

  if(!userId){
    res.status(400).send("Parâmetro Obrigatório!")
  }

  const userAfazeres = afazeres.filter(afazer => {
    return afazer.userId === userId
  }).map(afazer => afazer)
  res.status(200).send(userAfazeres)
})

app.listen(3003, () => {
  console.log("Server is running in http://localhost:3003");
});
