import { render, screen } from '@testing-library/react'
import Header from '../Header.js'

describe("Header", () => { 
    test('should render pokedex title', () => {
        render(<Header />);
        const headerElement = screen.getByRole("heading", { name: "Pokedex" })
        expect(headerElement).toBeInTheDocument();
    });
})