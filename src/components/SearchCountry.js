import React from 'react'
import styles from './Styles.module.css'

const SearchCountry = ({ input, setInput, handleClick }) => {

    return (
        <div className={styles.search}>
            <input type="text" placeholder="Country name" className={styles.searchField} value={input} onInput={e => setInput(e.target.value)} />
            <button className={styles.searchBtn} onClick={handleClick}>search</button>
        </div>
    )
}

export default SearchCountry
