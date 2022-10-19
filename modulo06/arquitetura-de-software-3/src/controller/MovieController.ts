import { Request, Response } from "express";
import { MovieBusiness } from "../business/MovieBusiness";

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

      const movieBusiness = new MovieBusiness();
      await movieBusiness.create({ title, description, duration_in_minutes, year_of_release });

      res.status(201).send({ message: "Filme cadastrado com sucesso" });
    } catch (error: any) {
      res.status(400).send(error.message);
    }
  }
}