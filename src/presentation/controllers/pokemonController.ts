import { Request, Response } from "express";
import { CatchError } from "../../domain/errors/catchErrors";
import { PokemonModel } from "../models/PokemonModel";

export class PokemonController {
  constructor() {}

  private handleError = (err: any, res: Response) => {
    console.log(err);
    if (err instanceof CatchError) {
      return res.status(err.statusCode).json({ messsage: err.message });
    }
    return res.status(500).json({ message: " something went very wrong" });
  };

  static async getAll(req: Request, res: Response) {
    const pokemos = await PokemonModel.getAllPokemons();

    return res.status(201).json(pokemos);
  }
}
