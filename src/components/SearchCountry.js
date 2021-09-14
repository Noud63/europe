import React from 'react'
import styles from './Styles.module.css'

const SearchCountry = ({ input, setInput, handleClick }) => {

    return (
        <>
            <div className={styles.search}>
                <input type="text" placeholder="Country name" className={styles.searchField} value={input} onInput={e => setInput(e.target.value)} />
                <button className={styles.searchBtn} onClick={handleClick}>search</button>
            </div>

            <div className={styles.allCountriesBtn}>
                The Netherlands - Germany - Spain - Italy - Norway - Moldavia - Georgia - Ireland - Poland -
                Iceland - France - Austria - Czech Republic - Belgium - United Kingdom - Swizerland - Finland -
                Luxembourg - Andorra - Romania - Slovenia - Portugal - Estonia - Sweden - Ukraine - Hungary - 
                Belarus - Latvia - Lithuania - Montenegro -</div>
        </>
    )
}

export default SearchCountry
