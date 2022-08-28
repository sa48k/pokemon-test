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

## Notes
- First time using a GraphQL API, and my inexperience shows:
  - The query I use here to retrieve pokemon info from the API could be much cleaner. It retrieves a nested object for each pokemon's types, which is awkward to work with and leads to inelegant code in React. It would be better to retrieve a simple array of types: `{ types: ['fire', 'flying'] }`
  - Similarly, there must be a better way to include the flavour text alongside the Pokemon info. With this query, two objects are retrieved: one containing pokemon info, and the other containing all the flavour text. I'm guessing that GraphQL will allow me to 'merge' these queries but haven't figured out how yet.
- Also my first attempt at writing tests for React.
  - Started with simple unit tests, e.g. 'does `<Header />` render a header?', 'does the main grid contain 150 pokemon cards on startup?'
  - Progressed to integration tests, e.g. 'are exactly 12 cards displayed when the user clicks *Hide All* then *Fire*?'
  - Again, lots to learn here :)