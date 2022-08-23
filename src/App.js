import { useState } from 'react';
import './App.css';
import alltypes from './utils/alltypes'
import { Link } from 'react-router-dom'
import Header from './components/Header'
import MainGrid from './components/MainGrid'

function App() {

  return (
    <div className="App">
      <Link to='/'>
        <Header />
      </Link>
      <div className="flex-1 container min-h-screen mx-auto">
        <main className="bg-sky-200 p-4">
          <MainGrid />
        </main>
      </div>
    </div>
  );
}

export default App;