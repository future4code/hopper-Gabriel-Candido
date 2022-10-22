import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";
import { MovieInputDTO } from "../model/MovieDTO";

export class MovieController {
  async get(req: Request, res: Response):Promise<void> {
    try {
      const movieBusiness = new MovieBusiness();
      const movies = await movieBusiness.get()

      res.status(200).send(movies)
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }

  async create(req: Request, res: Response):Promise<void> {
    try {
      const { title, description, duration_in_minutes, year_of_release } = req.body;

      const input: MovieInputDTO = {
        title,
        description,
        duration_in_minutes,
        year_of_release
      }

      const movieBusiness = new MovieBusiness();
      await movieBusiness.create(input);

      res.status(201).send({ message: "Filme cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}