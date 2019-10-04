import React from "react";
import useDarkMode from "../Hooks/useDarkMode";

const Card = ( {players} ) => {
    console.log(players)
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleMode = e => {
        e.preventDefault();
        setDarkMode(!darkMode)
    }
    return(
        <div className="card-body">
            <div className="c">
            <h1>{players.name}</h1>
            <p>Country: {players.country}</p>
            <p>Searches: {players.searches}</p>
            <button 
                onClick={toggleMode}
                className={darkMode ? 'toggle toggled' : 'toggle'}
            > Change Color</button>
            </div>
        </div>
    )
}

export default Card;