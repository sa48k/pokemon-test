import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

const MockApp = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    )
}

describe("MainApp", () => {
    test('should have a header', () => {
        render(<MockApp />)
        const HeaderElement = screen.getByRole('heading', {name: /Pokedex/i})
        expect(HeaderElement).toBeVisible()
    });

    test('should show 150 pokemon cards on first load', async () => {
        render(<MockApp />)
        const PokemonCards = await screen.findAllByTestId('pokemon-card')
        expect(PokemonCards.length).toBe(150)
    });

    test('should show no cards and "no pokemon to display" message when checkedTypes is all false', async () => {
        render(<MockApp />)
        const HideAllButton = screen.getByRole('button', { name: /Hide All/i })
        fireEvent.click(HideAllButton)
        const PokemonCards = screen.queryAllByTestId('pokemon-card')
        expect(PokemonCards.length).toBe(0)
        const NoPokemonMessage = await screen.findByText(/No Pokemon to display/i)
        expect(NoPokemonMessage).toBeVisible()
    });

    const clickCheckbox = (type) => {
        const checkbox = screen.getByRole('checkbox', { name: type })  
        fireEvent.click(checkbox)
        return checkbox
    }

    test('should show 12 cards when only fire types are selected', async () => {
        render(<MockApp />)
        const HideAllButton = screen.getByRole('button', { name: /Hide All/i })
        fireEvent.click(HideAllButton)
        const FireCheckbox = clickCheckbox(/fire/i)
        expect(FireCheckbox.checked).toEqual(true)
        const PokemonCards = await screen.findAllByTestId('pokemon-card')
        expect(PokemonCards.length).toBe(12)
    })

    test('should show 7 cards when only steel and fairy types are selected', async () => {
        render(<MockApp />)
        const HideAllButton = screen.getByRole('button', { name: /Hide All/i })
        fireEvent.click(HideAllButton)
        const FairyCheckbox = clickCheckbox(/fairy/i)
        const SteelCheckbox = clickCheckbox(/steel/i)
        const PokemonCards = await screen.findAllByTestId('pokemon-card')
        expect(PokemonCards.length).toBe(7)
    })
});
 