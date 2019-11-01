import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

export const Card = ({ players }) => {

    return(
        <div className='cardDiv'>
            
            <h2>Name: {players.name}</h2>
            <p>Country: {players.country}</p>
            <p>Total Searches: {players.searches}</p>
            
        </div>
    )
}