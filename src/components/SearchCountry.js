import React from 'react'
import styles from './Styles.module.css'

const SearchCountry = () => {

   function handleClick(){
       console.log('Clicked!')
   }

    return (
          
            <div className={styles.search}>
                <input type="text" placeholder="Country name" className={styles.searchField} /><button className={styles.searchBtn} onClick={handleClick}>search</button>
            </div>
            
      
    )
}

export default SearchCountry
