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
    <div className="relative sm:w-3/4 lg:w-1/2 mx-auto">
      <Link className="absolute top-0 right-0 p-2 text-blue-700 text-xl underline" to='/'>Back</Link>

      <div className="absolute top-0 left-0 p-2">
        <h2 className="text-2xl">#{pokemon.index}</h2>
      </div>

      <div className="p-4 flex flex-row ">

        <div className="flex justify-center items-center flex-col basis-1/4 ">
          <div className="py-4">
            <h2 className="text-3xl">{pokemon.name}</h2>
          </div>
          <div className="py-4">
            <p>{types}</p>
          </div>
        </div>

        <div className="basis-3/4">
          <img className="mx-auto w-60 h-60  p-4 m-4" src={pokemon.image_url} alt={pokemon.name} />
        </div>

      </div>

    </div>
  )
}
