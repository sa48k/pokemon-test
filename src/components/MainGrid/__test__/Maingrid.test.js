import { render, screen, fireEvent } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Maingrid from '../Maingrid.js'

const mockAllPokemon = {
    'pokemon':
        [
            {
                "name": "bulbasaur",
                "id": 1,
                "types": [
                    {
                        "types": {
                            "name": "grass"
                        }
                    },
                    {
                        "types": {
                            "name": "poison"
                        }
                    }
                ]
            },
            {
                "name": "charizard",
                "id": 6,
                "types": [
                    {
                        "types": {
                            "name": "fire"
                        }
                    },
                    {
                        "types": {
                            "name": "flying"
                        }
                    }
                ]
            },
            {
                "name": "squirtle",
                "id": 7,
                "types": [
                    {
                        "types": {
                            "name": "water"
                        }
                    },
                ]
            }
        ]
}


const MockMainGrid = ({checkedTypes}) => {
    return (
        <BrowserRouter>
            <Maingrid allPokemon={mockAllPokemon} checkedTypes={checkedTypes} isLoading={false} />
        </BrowserRouter>
    )
}

describe("Maingrid", () => {
    test('should be visible', async () => {
        const checkedTypes = { 'fire': true, 'grass': true, 'water': true }
        render(<MockMainGrid checkedTypes={checkedTypes} />)
        const MaingridElement = screen.getByTestId('maingrid')
        expect(MaingridElement).toBeVisible();
    })

    test('should contain 1 or more cards when first loaded', async () => {
        const checkedTypes = { 'fire': true, 'grass': true, 'water': true }
        render(<MockMainGrid checkedTypes={checkedTypes} />)
        const PokemonCardsElement = screen.getAllByTestId('pokemon-card')
        // console.log(PokemonCardsElement.length)
        expect(PokemonCardsElement.length).toBeGreaterThan(0)
    })

    test('should render a charizard card when fire is true in checkedTypes', async () => {
        const checkedTypes = { 'fire': true }
        render(<MockMainGrid checkedTypes={checkedTypes} />)
        const CharizardElement = screen.queryByRole('heading', { name: /charizard/i })
        expect(CharizardElement).toBeInTheDocument();
    })

    test('should NOT render a charizard card when fire is false in checkedTypes', async () => {
        const checkedTypes = { 'fire': false  }
        render(<MockMainGrid checkedTypes={checkedTypes} />)
        const CharizardElement = screen.queryByRole('heading', { name: /charizard/i })
        expect(CharizardElement).not.toBeInTheDocument();
    })
})
        