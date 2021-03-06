import React from 'react'
import { country } from './Assets'

const allData = React.createContext()

const Context = ({ children }) => {

    const [count, setCount] = React.useState(1)
    const [index, setIndex] = React.useState(0)
    const [input, setInput] = React.useState("")

    const increment = () => {
        setIndex(index + 1)
        setCount(count + 1)
        if (index >= (country.length - 1) && count >= country.length) {
            setIndex(0)
            setCount(1)
        }
    }

    const decrement = () => {
        setIndex(index - 1)
        setCount(count - 1)
        if (index <= 0 && count <= 1) {
            setIndex(country.length - 1)
            setCount(country.length)
        }
    }

    function handleClick() {
        input === "" ? alert('No search query') : findCountry(input.toLowerCase())
        setInput("")
    }

    function findCountry(land) {
        for (let i = 0; i < country.length; i++) {
            if (country[i].toLowerCase() === land) {
                setIndex(i)
                setCount(i + 1)
            }
        }
    }

    return (
        <allData.Provider value={{ count, setCount, index, setIndex, input, setInput, increment, decrement, handleClick }}>{children}</allData.Provider>
    )
}

export const useGlobalContext = () => {
    return React.useContext(allData)
}

export { allData, Context }
