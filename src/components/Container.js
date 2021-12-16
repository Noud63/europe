import React from 'react';
import Header from './Header';
import SearchCountry from './SearchCountry';
import CityImage from './CityImage';
import Weather from './Weather';
import CountryNameFlag from './CountryNameFlag'
import styles from './Styles.module.css'
import { country } from './Assets'
import { useGlobalContext } from './Context';

const Container = () => {
    
    let { count, setCount, index, setIndex, input, setInput, increment, decrement, handleClick } = useGlobalContext();

    return (
        <>
            <div className={styles.container}>
                <Header />
                <SearchCountry input={input} setInput={setInput} handleClick={handleClick} />
                <CountryNameFlag count={count} index={index} />
                <CityImage count={count} index={index} increment={increment} decrement={decrement} setIndex={setIndex}/>
                <Weather index={index} />
            </div>
        </>
    )
}


export default Container


