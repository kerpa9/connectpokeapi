import { Router } from "express";
import { PokemonController } from "../controllers/pokemonController";

export class PokemonRoutes {
  static get routesPokemon(): Router {
    // const pokemonController = new PokemonController();
    const routerPokemon = Router();

    routerPokemon.get("/", PokemonController.getAll);
    routerPokemon.get("/:id", PokemonController.getOne);
    // routerPokemon.get("/:id", PokemonController.getOneTypeAndSpecie);

    return routerPokemon;
  }

  static get routesPokemontype(): Router {
    const routerPokemonType = Router();
    routerPokemonType.get("/:id", PokemonController.getOneTypeAndSpecie);

    return routerPokemonType;
  }
}
