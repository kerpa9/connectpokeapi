"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonRoutes = void 0;
const express_1 = require("express");
const pokemonController_1 = require("../controllers/pokemonController");
class PokemonRoutes {
    static get routesPokemon() {
        // const pokemonController = new PokemonController();
        const routerPokemon = (0, express_1.Router)();
        routerPokemon.get("/", pokemonController_1.PokemonController.getAll);
        routerPokemon.get("/:id", pokemonController_1.PokemonController.getOne);
        // routerPokemon.get("/:id", PokemonController.getOneTypeAndSpecie);
        return routerPokemon;
    }
    static get routesPokemontype() {
        const routerPokemonType = (0, express_1.Router)();
        routerPokemonType.get("/:id", pokemonController_1.PokemonController.getOneTypeAndSpecie);
        return routerPokemonType;
    }
}
exports.PokemonRoutes = PokemonRoutes;
