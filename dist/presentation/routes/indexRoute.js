"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routePokemon_1 = require("./routePokemon");
class AppRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        //Endpoints pokeAPI
        router.use("/pokemon", routePokemon_1.PokemonRoutes.routesPokemon);
        router.use("/pokemonAndType", routePokemon_1.PokemonRoutes.routesPokemontype);
        return router;
    }
}
exports.AppRoutes = AppRoutes;
