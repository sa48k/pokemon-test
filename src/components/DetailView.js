import React from 'react'
import { useParams } from 'react-router-dom'
import AllPokemon from '../utils/allpokemon.js'
import { Link } from 'react-router-dom'

export default function DetailView() {
  const params = useParams()

  function getPokemon(name) {
    let pokemon = AllPokemon.find(p => p.name === name)
    return pokemon
  }

  const pokemon = getPokemon(params.name)
  const types = pokemon.types.map(type => {
    return <span className="mx-1 bg-slate-800 text-white rounded-xl p-2">{type}</span>
  })

  return (
    <div className="flex justify-center gap-4">
      <div className="text-xl">#{pokemon.index}</div>
      <div className="flex flex-col">
        <div className="m-auto">
          <h2 className="text-3xl py-4">{pokemon.name}</h2>
          {types}
        </div>
      </div>
      <div><img className="mx-auto w-60 h-60" src={pokemon.image_url} alt={pokemon.name} /></div>
      <div><Link className="p-2 text-blue-700 text-xl underline" to='/'>Back</Link></div>
    </div>
  )
}
