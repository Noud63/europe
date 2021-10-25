import React from 'react';
import Header from './Header';
import SearchCountry from './SearchCountry';
import CityImage from './CityImage';
import Weather from './Weather';
import CountryNameFlag from './CountryNameFlag'
import styles from './Styles.module.css'
import { country } from './Assets'

const Container = () => {

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
        <>
            <div className={styles.container}>
                <Header />
                <SearchCountry input={input} setInput={setInput} handleClick={handleClick} />
                <CountryNameFlag count={count} index={index} />
                <CityImage count={count} index={index} increment={increment} decrement={decrement} />
                <Weather index={index} />
            </div>
        </>
    )
}

export default Container

//Github access token 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
