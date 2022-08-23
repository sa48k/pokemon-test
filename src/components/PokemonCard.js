import React from 'react'

export default function PokemonCard({ pokemon }) {
  return (
      <div className="bg-sky-300 border border-black rounded  hover:border-white hover:shadow-xl">
          <h2 className="text-xl text-bold p-4">
              {pokemon.index}. {pokemon.name}
              <img className="mx-auto" src={pokemon.image_url} alt={pokemon.name} />
          </h2>
      </div>
  )
}
