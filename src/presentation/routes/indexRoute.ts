import { Router } from "express";
import { PokemonRoutes } from "./routePokemon";

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    //Endpoints pokeAPI
    router.use("/pokemon", PokemonRoutes.routesPokemon);

    return router;
  }
}
