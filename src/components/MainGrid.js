import React from 'react'
import AllPokemon from '../utils/allpokemon'
import { Link } from 'react-router-dom'
import PokemonCard from './PokemonCard'

export default function MainGrid({ checkedTypes }) {
    const filterlist = Object.keys(checkedTypes).filter(key => checkedTypes[key] === true)
    const filteredPokemon = AllPokemon.map(pokemon => {
        if (filterlist.some(element => pokemon.types.includes(element))) return (
            <PokemonCard key={pokemon.index} pokemon={pokemon} />
        )
    })

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredPokemon}
        </div>
    )
}
