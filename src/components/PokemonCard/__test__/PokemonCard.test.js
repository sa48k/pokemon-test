import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PokemonCard from '../PokemonCard.js'

const mockpokemon = {
    name: "bulbasaur",
    id: 142,
    types: [
        {
            types: {
                name: "grass"
            }
        },
        {
            types: {
                name: "poison"
            }
        }
    ]
}

const MockPokemonCard = ({pokemon}) => (
    <BrowserRouter>
        <PokemonCard pokemon={mockpokemon} />
    </BrowserRouter>
)

describe("PokemonCard", () => {
    test('rendered card should have a title', async () => {
        render(<MockPokemonCard  />);
        const CardTitle = await screen.findByTestId("pokemon-name")
        expect(CardTitle).toBeInTheDocument();
    });

    test('rendered card should have an id # between 1 and 150 visible', async () => {
        render(<MockPokemonCard />);
        const CardIdElement = await screen.findByTestId("pokemon-id")
        const CardId = parseInt(CardIdElement.textContent)
        expect(CardIdElement).toBeInTheDocument()
        expect(CardId).toBeGreaterThan(0)
        expect(CardId).toBeLessThan(151)
    });

    test('renders an image', async () => {
        render(<MockPokemonCard />);
        const ImgElement = await screen.findByRole('img')
        expect(ImgElement).toBeVisible
    });
})