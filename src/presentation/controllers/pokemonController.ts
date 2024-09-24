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

    return res.status(200).json(pokemos);
  }

  static async getOne(req: Request, res: Response) {
    const { id } = req.params;
    // console.log(id);
    const pokemos = await PokemonModel.getOnePokemon(+id);

    // return res.status(200).json(pokemos.species.name);
    return res.status(200).json({
      name: pokemos.name,
      types: pokemos.types,
    });
  }

  static async getOneTypeAndSpecie(req: Request, res: Response) {
    const { id } = req.params;
    // console.log(id);
    const pokemos = await PokemonModel.getOneTypeandName(+id);

    return res.status(200).json({
      name: pokemos?.pokemons.name,
      types: pokemos?.pokemons.types,
      language: pokemos?.pokemons1.names[0],
    });
  }
}
