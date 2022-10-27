import { MovieDatabase } from "../data/MovieDatabase"
import { CustomError } from "../Error/CustomError"
import { Movie } from "../model/Movie"
import { MovieInputDTO } from "../model/MovieDTO"
import { generateId } from "../services/generateId"

export class MovieBusiness {
  async get():Promise<Movie[]> {
    const movieDatabase = new MovieDatabase()
    return await movieDatabase.get()
  }

  async create(input: MovieInputDTO):Promise<void> {
    try {
      const { title, description, duration_in_minutes, year_of_release } = input

      if ( !title || !description || !duration_in_minutes || !year_of_release ) {
        throw new CustomError(422,"Dados inválidos (title, description, duration_in_minutes, year_of_release)")
      }
  
      const id = generateId()
  
      const movieDatabase = new MovieDatabase()
      await movieDatabase.create({
        id,
        title,
        description,
        duration_in_minutes,
        year_of_release
      })
    } catch (error: any) {
      throw new CustomError(error.statusCode, error.message || error.sqlMessage);
    }
  }

}