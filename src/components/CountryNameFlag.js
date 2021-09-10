import React from 'react'
import styles from './Styles.module.css'
import { flags, country } from './Assets'

const CountryNameFlag = ({ count, index }) => {
return (
        <div className={styles.countries}>
            <div className={styles.country}>{count}. {country[index]}</div>
        <div className={styles.flag}><img src={process.env.PUBLIC_URL + `/banners/${flags[index]}`} alt="" className={styles.flag} /></div>
        </div>
    )
}

export default CountryNameFlag
