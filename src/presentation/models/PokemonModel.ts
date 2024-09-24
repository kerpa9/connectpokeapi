import { readJSONFromEndpoint } from "../utils/utils";
const url1 = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100";
const url2 = `https://pokeapi.co/api/v2/pokemon`;

export class PokemonModel {
  static async getAllPokemons() {
    try {
      const pokemons = await readJSONFromEndpoint(url1);

      //   console.log(pokemons);
      return pokemons.results;
    } catch (error) {
      console.error("Error fetching pokemons:", error);
      return null;
    }
  }

  static async getOnePokemon(id: number) {
    const urlbase = `${url2}/${id}`;
    // console.log(urlbase);
    try {
      const pokemons = await readJSONFromEndpoint(urlbase);

      //   console.log(pokemons);
      return pokemons.types;
    } catch (error) {
      console.error("Error fetching pokemons:", error);
      return null;
    }
  }
}
