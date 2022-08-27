# Pokemon-test
 
## Installation
Make sure you have `npm` available globally. Clone the repository with `git clone https://github.com/sa48k/pokemon-test.git`. Run `npm install` in this directory to install the required dependencies, then `npm start` to launch the server. A test suite is available and can be run with `npm test`.

Alternatively, see the [live demo](https://main.d1pgd9zqjsvwq6.amplifyapp.com).

## Usage
From the main grid, click on a Pokemon to display its details. Use the sidebar to filter by type.

## Screenshots
### Main view
![Main view](https://i.postimg.cc/FRwQTP7X/ss1.png)

### Detail view
![Detail view](https://i.postimg.cc/brbfWQtD/ss2.png)

## Known issues
If the user navigates directly to a details view (e.g. /details/bulbasaur') instead of arriving via a link on the main grid view, the 'back' button doesn't return the user to the main grid view.

## Notes
- First time using a GraphQL API. The query I use here to retrieve pokemon info from the API feels like it could be a *lot* cleaner by returning an array of types (fire, flying, etc.) alongside each Pokemon instead of the nested object I've ended up with. Also, there must be a better way to include the flavour text alongside the Pokemon info; because of my clumsy query (or possibly misunderstanding the API), I end up retrieving two objects: one containing pokemon info, and the other containing all the flavour text. This leads to some inelegant and hard-to-read code in React when I need to retrieve this info on the detail view.
- Also my first attempt at writing tests for React. 