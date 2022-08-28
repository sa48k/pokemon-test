import React from 'react'
import PokemonCard from '../PokemonCard/PokemonCard'

export default function MainGrid({ allPokemon, checkedTypes }) {
    // get the checked types which is set by the sidebar
    const filterlist = Object.keys(checkedTypes).filter(key => checkedTypes[key] === true)

    // iterate through all pokemon. for each one, add it to our results IF it has a type
    // matching those found in the checkedTypes
    const filteredPokemon = allPokemon.pokemon.map((pokemon, index) => {
        const types = pokemon.types.map(type => type.types.name)
        if (filterlist.some(element => types.includes(element))) {
            return (
                <div data-testid={`pokemon-card`} key={pokemon.id}>
                    <PokemonCard pokemon={pokemon} />
                </div>
            )
        } else {
            return null
        }
    })

    // check that there are non-null elements in the filteredPokemon array. if so, render them. 
    // if the filteredPokemon array is all null, render 'no pokemon found' message
    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" data-testid="maingrid" title="maingrid">
            {Object.values(filteredPokemon).some(Boolean) ? filteredPokemon : <p className="mx-auto">No Pokemon to display</p>}
        </div>
    )
}
