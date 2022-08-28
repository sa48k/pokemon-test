import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header/Header'
import MainGrid from './components/MainGrid/MainGrid'
import DetailView from './components/DetailView/DetailView'
import Sidebar from './components/Sidebar/Sidebar'
import fetchPokemon from './utils/fetchPokemon'
import './App.css'

function App() {
  const [allPokemon, setAllPokemon] = useState({ pokemon: [] })
  const [isLoading, setIsLoading] = useState(true)

  // initialise the array of pokemon types and use them as keys with Boolean values
  // we can use this to store state for the filter in the sidebar, e.g. {fire: true, flying: true, etc.}
  // and then conditionally render PokemonCards based on the checkedTypes
  const typesarray = ['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy']
  let pokemontypes = {}
  for (const type of typesarray) {
    pokemontypes[type] = true
  }
  const [checkedTypes, setCheckedTypes] = useState(pokemontypes) 

  useEffect(() => {
    fetchPokemon({setAllPokemon, setIsLoading})
  }, []) // no dependencies; run once only

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
            <h2 className="text-xl mt-8">Loading...</h2>
            :
            <Routes>
              <Route path="/details/:name" element={allPokemon && <DetailView allPokemon={allPokemon} />} />
              <Route path="/" element={allPokemon && <MainGrid allPokemon={allPokemon} checkedTypes={checkedTypes} isLoading={isLoading} />} />
            </Routes>
          }

        </main>
      </div>
    </div>
  )
}

export default App