export default function fetchPokemon({setAllPokemon, setIsLoading}) {

// GraphQL query to get names, ids, types, and flavour text from the API
const gqlQuery = `
      query getPokemon {
        pokemon: pokemon_v2_pokemon(limit:150) {
          name
          id
          types: pokemon_v2_pokemontypes {
            types: pokemon_v2_type {
              name: name
            }
          }
        }
        text: pokemon_v2_pokemonspecies {
          flavortext: pokemon_v2_pokemonspeciesflavortexts(where: {pokemon_v2_language: {name: {_eq: "en"}}, pokemon_v2_version: {name: {_eq: "firered"}}, pokemon_species_id: {_lte: 150, _gte: 1}}) {
            flavor_text
            pokemon_species_id
          }
        }
      }
      `;

fetch('https://beta.pokeapi.co/graphql/v1beta', {
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        query: gqlQuery,
    }),
    method: 'POST',
})
    .then((res) => res.json())
    .then((res) => setAllPokemon(res.data))
        .finally(() => { setIsLoading(false); });
    
}