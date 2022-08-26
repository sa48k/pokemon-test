const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  safelist: [
    'normal', 'fire', 'water', 'electric', 'grass', 'ice', 'fighting', 'poison', 'ground', 'flying', 'psychic', 'bug', 'rock', 'ghost', 'dragon', 'dark', 'steel', 'fairy',
    'bg-normal', 'bg-fire', 'bg-water', 'bg-electric', 'bg-grass', 'bg-ice', 'bg-fighting', 'bg-poison', 'bg-ground', 'bg-flying', 'bg-psychic', 'bg-bug', 'bg-rock', 'bg-ghost', 'bg-dragon', 'bg-dark', 'bg-steel', 'bg-fairy',
  ],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'bg-sans-serif'],
      },
      colors: {
        'normal': '#a4acaf',
        'fire': '#fd7d24',
        'water': '#4592c4',
        'electric': '#eed535',
        'grass': '#9bcc50',
        'ice': '#51c4e7',
        'fighting': '#d56723',
        'poison': '#b97fc9',
        'ground': '#ab9842',
        'flying': '#3dc7ef',
        'psychic': '#f366b9',
        'bug': '#729f3f',
        'rock': '#a38c21',
        'ghost': '#7b62a3',
        'dragon': '#f16e57',
        'dark': '#444444',
        'steel': '#9eb7b8',
        'fairy': '#fdb9e9',
      },
    },
  },
  plugins: [],
}
