import React from 'react';
import Players from './components/Players';
import { useDarkMode } from './hooks/useDarkMode';
import './App.css';

function App() {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
      e.preventDefault();
      setDarkMode(!darkMode);
   };

  return (
    <div className="App">
      <button 
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
      >Click</button>
      <h1>Womens World Cup Popular Players!</h1>
      <Players/>
    </div>
  );
}

export default App;
