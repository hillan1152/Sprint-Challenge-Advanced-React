import React from "react";

const Card = ( {players} ) => {
    console.log(players)
    return(
        <div>
            <h1>{players.name}</h1>
            <p>Country: {players.country}</p>
            <p>Searches: {players.searches}</p>
        </div>
    )
}

export default Card;