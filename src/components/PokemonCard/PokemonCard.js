import React from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function PokemonCard({ pokemon }) {
    const types = pokemon.types.map(type => type.types.name) 
    const { pathname } = useLocation()

    return (
        <Link to={`/details/${pokemon.name}`} state={{ previousPath: pathname }}>
            <div className={`bg-${types[0]} bg-opacity-40 border border-gray-500 rounded  hover:border-white hover:shadow-xl`}>
                <h3 className="mt-2 text-gray-600" data-testid="pokemon-id">{pokemon.id}</h3>
                <h2 className="text-2xl font-raleway text-bold p-4 capitalize" data-testid="pokemon-name">
                    {pokemon.name}
                </h2>
                <img className="mx-auto w-48 h-48 mb-4" src={`https://raw.githubusercontent.com/jnovack/pokemon-svg/master/svg/${pokemon.id}.svg`} alt={pokemon.name} />
            </div>
        </Link>
    )
}
