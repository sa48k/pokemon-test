import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function DetailView({ allPokemon }) {
  const params = useParams()
  const navigate = useNavigate()

  // look up pokemon's name from the URL then use this to get 
  // the id, types, and flavortext from the allPokemon object
  const pokemon = allPokemon.pokemon.find(p => p.name === params.name)   
  const types = pokemon.types.map(type => type.types.name) 
  const typeBadges = types.map(type => <span key={type} className="mx-1 bg-slate-800 font-raleway font-light text-white rounded-xl p-2">{type}</span>)
  const flavortext = allPokemon.text.find(t => t.flavortext[0]?.pokemon_species_id === pokemon.id).flavortext[0].flavor_text

  const handleGoBack = () => {
    // TODO: Check the history stack - if we arrived here from root, go back
    // If we arrived here from the user going directly to (e.g.) '/details/raichu' 
    // then we should go to root instead of going back
    navigate(-1)
  }

  return (
    <div className={"max-w-xl mx-auto bg-" + types[0] + " p-8 rounded bg-opacity-40 border border-slate-600"}>
      {/* Top row - back button (click to go back to gallery, maintaining scroll position), and id number */}
      <div className="w-full flex justify-between">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 hover:text-white" onClick={() => handleGoBack()} alt="Back">
          <path fillRule="evenodd" d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z" clipRule="evenodd" />
        </svg>
        <h3 className="text-xl text-gray-600 font-light">#{pokemon.id}</h3>
      </div>

      <div className="flex flex-col md:flex-row justify-around items-center">
        <div>
          <h2 className="text-3xl font-raleway py-4 capitalize">{pokemon.name}</h2>
          {typeBadges}
        </div>
        <div>
          <img className="mx-auto w-48 h-48 py-4" src={`https://raw.githubusercontent.com/jnovack/pokemon-svg/master/svg/${pokemon.id}.svg`} alt={pokemon.name} />
        </div>
      </div>

      <div className="w-full md:w-10/12 mx-auto">
        <p className="font-md font-raleway">
          {flavortext}
        </p>
      </div>
    </div>
  )
}
