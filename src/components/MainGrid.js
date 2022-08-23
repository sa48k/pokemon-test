import React from 'react'
import AllPokemon from '../utils/allpokemon'
import PokemonCard from './PokemonCard'

export default function MainGrid() {
    const pokemongrid = AllPokemon.map(pokemon => (
        <PokemonCard pokemon={pokemon} />
    ))

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {pokemongrid}
        </div>
    )
}
