import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header/Header'
import MainGrid from './components/MainGrid/MainGrid'
import DetailView from './components/DetailView/DetailView'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const [allPokemon, setAllPokemon] = useState({ pokemon: [] })
  const [isLoading, setIsLoading] = useState(true);

  // initialise the array of pokemon types and use them as keys with Boolean values
  // we can use this to store state from the filter in the sidebar component, e.g. {fire: true, flying: true, etc.}
  const typesarray = ['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy']
  let pokemontypes = {}
  for (const type of typesarray) {
    pokemontypes[type] = true
  }
  const [checkedTypes, setCheckedTypes] = useState(pokemontypes)  // for type checkboxes in sidebar

  // GraphQL query to get names, ids, types, and flavour text from the API
  useEffect(() => {
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
      .finally(() => {setIsLoading(false);});
  }, []);

  return (
    <div className="App">
      <Link to='/'>
        <Header />
      </Link>
      <div className="md:flex-col lg:flex-1 container mx-auto">
        <aside className="w-44 fixed min-h-screen bg-sky-100 p-4">
          <Sidebar checkedTypes={checkedTypes} setCheckedTypes={setCheckedTypes} typesarray={typesarray} />
        </aside>
        <main className="ml-44 flex-1 p-4">

          {isLoading ?
            <h2 className="text-xl">Loading...</h2>
            :
            <Routes>
              <Route path="/details/:name" element={allPokemon && <DetailView allPokemon={allPokemon} />} />
              <Route path="/" element={allPokemon && <MainGrid allPokemon={allPokemon} checkedTypes={checkedTypes} isLoading={isLoading} />} />
            </Routes>
          }

        </main>
      </div>
    </div>
  );
}

export default App