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
exports.PokemonController = void 0;
const catchErrors_1 = require("../../domain/errors/catchErrors");
const PokemonModel_1 = require("../models/PokemonModel");
class PokemonController {
    constructor() {
        this.handleError = (err, res) => {
            console.log(err);
            if (err instanceof catchErrors_1.CatchError) {
                return res.status(err.statusCode).json({ messsage: err.message });
            }
            return res.status(500).json({ message: " something went very wrong" });
        };
    }
    static getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const pokemos = yield PokemonModel_1.PokemonModel.getAllPokemons();
            return res.status(200).json(pokemos);
        });
    }
    static getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            // console.log(id);
            const pokemos = yield PokemonModel_1.PokemonModel.getOnePokemon(+id);
            // return res.status(200).json(pokemos.species.name);
            return res.status(200).json({
                name: pokemos.name,
                types: pokemos.types,
            });
        });
    }
    static getOneTypeAndSpecie(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            // console.log(id);
            const pokemos = yield PokemonModel_1.PokemonModel.getOneTypeandName(+id);
            return res.status(200).json({
                name: pokemos === null || pokemos === void 0 ? void 0 : pokemos.pokemons.name,
                types: pokemos === null || pokemos === void 0 ? void 0 : pokemos.pokemons.types,
                language: pokemos === null || pokemos === void 0 ? void 0 : pokemos.pokemons1.names[0],
            });
        });
    }
}
exports.PokemonController = PokemonController;
