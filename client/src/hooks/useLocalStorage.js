import { useState } from 'react'

export const useLocalStorage = (key, initialValue) => {

    const [trueOrFalse, setTrueorFalse] = useState(() => {
        const getValue = window.localStorage.getItem(key)
        return getValue ? JSON.parse(getValue) : initialValue
    })
    const setValue = value => {
        setTrueorFalse(value)
        const finalValue = window.localStorage.setItem(key, JSON.stringify(value))
        return finalValue
    }
    return [trueOrFalse, setValue]
}