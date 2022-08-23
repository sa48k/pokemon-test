import React from 'react'
import { Link } from 'react-router-dom'

export default function PokemonCard({ pokemon }) {
    return (
        <Link to={`/details/${pokemon.name}`}>
            <div className="bg-sky-300 border border-black rounded  hover:border-white hover:shadow-xl">
                <h2 className="text-xl font-raleway text-bold p-4">
                    {pokemon.index}. {pokemon.name}
                </h2>
                <img className="mx-auto" src={pokemon.image_url} alt={pokemon.name} />
            </div>
        </Link>
    )
}
