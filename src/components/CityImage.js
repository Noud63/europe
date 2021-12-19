import React from 'react'
import styles from './Styles.module.css'
import { images } from './Assets'
import { countries } from './countries'
import PrevAndNextBtns from './PrevAndNextBtns';
import { country } from './Assets'
import { Link } from "react-router-dom";

const CityImage = ({ index, setIndex, count, increment, decrement}) => {

    const [show, setShow] = React.useState(false)

    const showMap = () => {
        setShow(!show)
    }

    return (
        <>
            <div className={styles.box}>
                <div className={styles.imagebox}>
                    <div className={styles.bgImg}><img src={process.env.PUBLIC_URL + `/images/${images[index]}`} alt="" className={styles.bgImage} /></div>
                </div>
            </div>

            <PrevAndNextBtns increment={increment} decrement={decrement} count={count} index={index} />

            <div className={styles.infoBox}>
                <div className={styles.information}>
                    <div>Capital: {countries[index].capital}</div>
                    <div>Population: {countries[index].population}</div>
                    <div>Language: {countries[index].language}</div>
                    <div>Currency: {countries[index].currency}</div>
                </div>
                <div className={styles.map} onClick={showMap}><img src={process.env.PUBLIC_URL + `${countries[index].image}`} alt="" />
                    <div className={styles.mapOverlay} style={show ? { display: 'flex' } : { display: 'none' }}>
                        <img src={process.env.PUBLIC_URL + `${countries[index].imagebig}`} alt="" className={styles.popup} />
                        <div className={styles.overlayTitle}>{country[index].toUpperCase()}</div>
                    </div>
                </div>
            </div>
            <Link to='/readmore' className={styles.readmoreLink}>
                <div className={styles.readmore}>read more about {country[index]}</div>
            </Link>
        </>
    )
}

export default CityImage
