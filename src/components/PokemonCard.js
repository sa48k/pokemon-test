import React from 'react'
import { Link } from 'react-router-dom'

export default function PokemonCard({ pokemon }) {
  return (
      <div className="bg-sky-300 border border-black rounded  hover:border-white hover:shadow-xl">
          <Link to={`/details/${pokemon.name}`}>
          <h2 className="text-xl text-bold p-4">
              {pokemon.index}. {pokemon.name}
          </h2>
              <img className="mx-auto" src={pokemon.image_url} alt={pokemon.name} />
          
          </Link>
      </div>
  )
}
