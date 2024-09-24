import { readJSONFromEndpoint } from "../utils/utils";
const url1: string = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=100";
const url2: string = `https://pokeapi.co/api/v2/pokemon`;
const url3: string = `https://pokeapi.co/api/v2/encounter-method`;

export class PokemonModel {
  static async getAllPokemons() {
    try {
      const pokemons = await readJSONFromEndpoint(url1);

      //   console.log(pokemons);
      return pokemons.results;
    } catch (error: any) {
      console.error("Error fetching pokemons:", error);
      return null;
    }
  }

  static async getOnePokemon(id: number) {
    const urlbase: string = `${url2}/${id}`;
    // console.log(urlbase);
    try {
      const pokemons = await readJSONFromEndpoint(urlbase);

      //   const pokemonName = pokemons.name;

      //   console.log(pokemons);
      return pokemons;
    } catch (error: any) {
      console.error("Error fetching pokemons:", error);
      return null;
    }
  }

  static async getOneTypeandName(id: number) {
    const urlbase: string = `${url2}/${id}`;
    const urlbase1: string = `${url3}/${id}`;
    try {
      const pokemons = await readJSONFromEndpoint(urlbase);
      const pokemons1 = await readJSONFromEndpoint(urlbase1);

      //   console.log(pokemons);
      return { pokemons, pokemons1 };
    } catch (error: any) {
      console.error("Error fetching pokemons:", error);
      return null;
    }
  }
}
