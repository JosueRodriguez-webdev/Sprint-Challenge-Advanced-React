import React from 'react'

// mapping thru player data that was passed down from app.js

export const PlayersOnScreen = ({ players }) => {
    const { name, country } = players

    return(
        <div>
                <p>{name}</p>
                <p>{country}</p>
        </div>

    )
}