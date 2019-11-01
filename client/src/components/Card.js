import React from 'react';

export const Card = ({ players }) => {
    return(
        <div>
            <h2>Name: {players.name}</h2>
            <p>Country: {players.country}</p>
            <p>Total Searches: {players.searches}</p>
        </div>
    )
}