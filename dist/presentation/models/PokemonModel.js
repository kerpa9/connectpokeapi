"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PokemonModel = void 0;
const utils_1 = require("../utils/utils");
const url1 = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100";
const url2 = `https://pokeapi.co/api/v2/pokemon`;
const url3 = `https://pokeapi.co/api/v2/encounter-method`;
class PokemonModel {
    static getAllPokemons() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const pokemons = yield (0, utils_1.readJSONFromEndpoint)(url1);
                //   console.log(pokemons);
                return pokemons.results;
            }
            catch (error) {
                console.error("Error fetching pokemons:", error);
                return null;
            }
        });
    }
    static getOnePokemon(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlbase = `${url2}/${id}`;
            // console.log(urlbase);
            try {
                const pokemons = yield (0, utils_1.readJSONFromEndpoint)(urlbase);
                //   const pokemonName = pokemons.name;
                //   console.log(pokemons);
                return pokemons;
            }
            catch (error) {
                console.error("Error fetching pokemons:", error);
                return null;
            }
        });
    }
    static getOneTypeandName(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const urlbase = `${url2}/${id}`;
            const urlbase1 = `${url3}/${id}`;
            try {
                const pokemons = yield (0, utils_1.readJSONFromEndpoint)(urlbase);
                const pokemons1 = yield (0, utils_1.readJSONFromEndpoint)(urlbase1);
                //   console.log(pokemons);
                return { pokemons, pokemons1 };
            }
            catch (error) {
                console.error("Error fetching pokemons:", error);
                return null;
            }
        });
    }
}
exports.PokemonModel = PokemonModel;
