import React from 'react'
import { useDarkMode } from '../hooks/useDarkMode'

export const NavBar = () => {
    const [darkMode, setDarkMode] = useDarkMode('dark mode status', false)

    const toggle = event => {
        event.preventDefault();
        setDarkMode(!darkMode)
    }


        return(
            <div>
                <button data-testid="button-change" className='btn' onClick={toggle}>Push Me</button>
            </div>
        )
}