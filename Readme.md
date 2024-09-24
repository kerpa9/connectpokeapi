Description in English

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

Descripción en español

La API desarrollada sigue la arquitectura REST, cumpliendo con todos sus principios. Se utiliza el patrón Modelo-Vista-Controlador (MVC) junto con el patrón de diseño Adaptador. El framework Express permite, mediante CORS, el consumo de cualquier ruta o cliente. Este proyecto está implementado en TypeScript (basado en clases) y utiliza variables de entorno gestionadas de manera óptima con dotenv y env-var. Además, se ha implementado una función específica para el manejo adecuado de errores.

1. GET /api/pokemon - Lista los primeros 100 Pokémon y devuelve su "nombre" y "URL". Consulta la documentación en: https://pokeapi.co/docs/v2#pokemon  
   Endpoint:  
   https://connectpokeapi.onrender.com/api/v1/pokemon

2. GET /api/pokemon/:id - Obtén un Pokémon específico y devuelve su "nombre" y "tipos". La respuesta debería ser similar a la siguiente:  
   Endpoint:  
   https://connectpokeapi.onrender.com/api/v1/pokemon/:id

3. GET /api/pokemonAndTypes/:id - Obtén un Pokémon específico y devuelve su "nombre", "tipos" y las traducciones en español y japonés de cada uno de sus tipos. Consulta la documentación en:  
   https://pokeapi.co/docs/v2#types  
   La respuesta debería ser similar a la siguiente:  
   Endpoint:  
   https://connectpokeapi.onrender.com/api/v1/pokemonAndType/:id
