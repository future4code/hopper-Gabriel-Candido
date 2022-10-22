import { BaseDatabase } from "./BaseDatabase";
import { Movie } from "../model/Movie";

export class MovieDatabase extends BaseDatabase {
  private static TABLE_NAME = "LABEFLIX_MOVIE";

  async get(): Promise<Movie[]>{
    const result = await MovieDatabase
    .connection(MovieDatabase.TABLE_NAME)
    .select()

    return result
  }

  async create({ id, title, description, duration_in_minutes, year_of_release }: any): Promise<void> {
    await MovieDatabase.connection
      .insert({
        id,
        title,
        description,
        duration_in_minutes,
        year_of_release
      })
      .into(MovieDatabase.TABLE_NAME);
  }
}