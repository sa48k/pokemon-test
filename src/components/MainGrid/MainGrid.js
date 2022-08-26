import React from 'react'
import PokemonCard from '../PokemonCard/PokemonCard'

export default function MainGrid({ allPokemon, checkedTypes, isLoading }) {
    // use the checkedTypes to decide which pokemon we send to the main window
    const filterlist = Object.keys(checkedTypes).filter(key => checkedTypes[key] === true)
    const filteredPokemon = allPokemon.pokemon.map(pokemon => {
        const types = pokemon.types.map(type => type.types.name)
        if (filterlist.some(element => types.includes(element))) {
            return (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            )
        } else {
            return null
        }
    })

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Object.values(filteredPokemon).some(Boolean) ? filteredPokemon : <p className="mx-auto">No Pokemon to display</p>}
        </div>
    )
}
