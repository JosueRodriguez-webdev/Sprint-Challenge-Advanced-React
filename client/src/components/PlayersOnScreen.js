import React from 'react'

export const PlayersOnScreen = ({ players }) => {
    const { name, country } = players

    return(
        <div>
                <p>{name}</p>
                <p>{country}</p>
        </div>

    )
}