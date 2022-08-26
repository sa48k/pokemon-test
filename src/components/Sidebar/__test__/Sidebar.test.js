import { render, screen, fireEvent } from '@testing-library/react'
import Sidebar from '../Sidebar.js'

const typesarray = ['normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy']

describe("Sidebar", () => {
    test('should be visible', () => {
        render(<Sidebar checkedTypes={[]} typesarray={typesarray} />)
        const SidebarElement = screen.getByTitle('sidebar')
        expect(SidebarElement).toBeInTheDocument();
    });

    test('should have 18 checkboxes for the filter', async () => {
        render(<Sidebar checkedTypes={[]} typesarray={typesarray} />)
        const TypesList = screen.getAllByRole('checkbox')
        expect(TypesList).toHaveLength(18)
    });

    test('the "hide all" button should UNCHECK all 18 boxes', async () => {
        const mockSetCheckedTypes = jest.fn()
        render(<Sidebar checkedTypes={[]} setCheckedTypes={mockSetCheckedTypes} typesarray={typesarray} />);
        const HideAllButton = screen.getByRole('button', { name: /Hide All/i })
        fireEvent.click(HideAllButton)
        const TypeCheckboxes = screen.getAllByRole('checkbox')
        const AllTypesChecked = Object.values(TypeCheckboxes).every(Boolean)
        expect(AllTypesChecked).not.toBeTruthy
    });

    test('the "show all" button should CHECK all 18 boxes', async () => {
        const mockSetCheckedTypes = jest.fn()
        render(<Sidebar checkedTypes={[]} setCheckedTypes={mockSetCheckedTypes} typesarray={typesarray} />);
        const ShowAllButton = screen.getByRole('button', { name: /Show All/i })
        fireEvent.click(ShowAllButton)
        const TypeCheckboxes = screen.getAllByRole('checkbox')
        const AllTypesChecked = Object.values(TypeCheckboxes).every(Boolean)
        expect(AllTypesChecked).toBeTruthy
    });
})