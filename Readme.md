The developed API follows REST architecture, adhering to all its principles. The Model-View-Controller (MVC) pattern is used along with the Adapter design pattern. The Express framework allows, through CORS, the consumption of any route or client. This project is implemented in TypeScript (class-based) and includes the use of environment variables managed optimally with dotenv and env-var. Additionally, a specific function for proper error handling has been implemented.

1. GET /api/pokemon - List all first 100 Pokemons and return its “name” and “URL”. See
   the docs at: https://pokeapi.co/docs/v2#pokemon
   Endpoint
   https://connectpokeapi.onrender.com/api/v1/pokemon

2. GET /api/pokemon/:id - Get a specific Pokemon and return its “name” and “types”.
   The response should look like the following:
   Endpoint
   https://connectpokeapi.onrender.com/api/v1/pokemon/:id

3. GET /api/pokemonAndTypes/:id - Get a specific Pokemon and return its “name”,
   “types”, and the translations of Spanish and Japanese for each of its types. See the docs at:
   https://pokeapi.co/docs/v2#types
   The response should look like the following:
   Endpoint  
    https://connectpokeapi.onrender.com/api/v1/pokemonAndType/:id
