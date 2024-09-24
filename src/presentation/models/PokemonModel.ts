import { readJSONFromEndpoint } from "../utils/utils";
const url = "https://pokeapi.co/api/v2/evolution-chain?offset=20&limit=20";

export class PokemonModel {
  static async getAllPokemons() {
    try {
      const pokemons = await readJSONFromEndpoint(url);
      //   console.log(pokemons);
      return pokemons;
    } catch (error) {
      console.error("Error fetching pokemons:", error);
      return null;
    }
  }
}
