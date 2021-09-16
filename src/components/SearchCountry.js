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
                The Netherlands - Germany - Spain - Italy - Norway - Moldavia - Georgia -
                Ireland - Poland - Iceland - France - Austria - Czech Republic - Belgium - United Kingdom - Swizerland -
                Finland - Luxembourg - Andorra - Romania - Slovenia - Portugal - Estonia - Sweden - Ukraine - Hungary -
                Belarus - Latvia - Lithuania - Montenegro - Vatican City - North Macedonia - Greece - Slovakia -
                Liechtenstein - San Marino - Kosovo - Serbia - Croatia Bosnia and Herzegovina - Bulgaria - Denmark -
                Albania - Malta - Monaco - Russia -
                </div>
        </>
    )
}

export default SearchCountry
