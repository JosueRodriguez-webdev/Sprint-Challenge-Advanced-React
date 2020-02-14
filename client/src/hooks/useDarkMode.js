import { useEffect } from 'react'
 import { useLocalStorage } from './useLocalStorage'

 export const useDarkMode = value => {
     
    const [darkMode, setDarkMode] = useLocalStorage(value)
    const bodyTag = document.querySelector('body')
    useEffect(() => {
        if (darkMode === true){
            return bodyTag.classList.add('dark-mode')
        } else {
            return bodyTag.classList.remove('dark-mode')
        }
    }, [darkMode])

    return [darkMode, setDarkMode]
 }