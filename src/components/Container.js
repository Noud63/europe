import React from 'react';
import Header from './Header';
import CityImage from './CityImage';
import Weather from './Weather';
import CountryNameFlag from './CountryNameFlag'
import styles from './Styles.module.css'
import { country } from './Assets'

const Container = () => {

    const [count, setCount] = React.useState(1)
    const [index, setIndex] = React.useState(0)

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
            setIndex(19)
            setCount(20)
        }
    }

    return (
        <>
            <div className={styles.container}>
                <Header />
                <CountryNameFlag count={count} index={index} />
                <CityImage count={count} index={index} increment={increment} decrement={decrement} />
                <Weather index={index} />
            </div>
        </>
    )
}

export default Container
