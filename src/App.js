import { useState } from 'react';
import './App.css';
import alltypes from './utils/alltypes'
import { Routes, Route, Link } from 'react-router-dom'
import Header from './components/Header'
import MainGrid from './components/MainGrid'
import DetailView from './components/DetailView'
import Sidebar from './components/Sidebar'

function App() {
  const typesarray = alltypes.map(type => type.name)
  let pokemontypes = {}
  for (const type of typesarray) {
    pokemontypes[type] = true
  }

  const [checkedTypes, setCheckedTypes] = useState(pokemontypes)  // for type checkboxes in sidebar

  return (
    <div className="App">
      <Link to='/'>
        <Header />
      </Link>
      <div className="flex-1 container mx-auto">
        <aside className="w-48 fixed bg-sky-100 p-4">
          <Sidebar checkedTypes={checkedTypes} setCheckedTypes={setCheckedTypes} />
        </aside>
        <main className="ml-48 flex-1 bg-sky-200 p-4">
          <Routes>
            <Route path="/" element={<MainGrid checkedTypes={checkedTypes} />} />
            <Route path="/details/:name" element={<DetailView />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App