import React from 'react'
import styles from './Styles.module.css'
import { images } from './Assets'
import { countries } from './countries'
import PrevAndNextBtns from './PrevAndNextBtns';

const CityImage = ({ index, count, increment, decrement }) => {

    const [show, setShow] = React.useState(false)

    const showMap = () => {
        setShow(!show)
    }

    return (
        <>
            <div className={styles.box}>
                <div className={styles.imagebox}>
                    <div className={styles.bgImg}><img src={`images/${images[index]}`} alt="" className={styles.bgImage} /></div>
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
                <div className={styles.map} onClick={showMap}><img src={`${countries[index].image}`} alt="" />
                    <div className={styles.mapOverlay} style={show ? { display: 'flex' } : { display: 'none' }}>
                        <img src={`${countries[index].imagebig}`} alt="" className={styles.popup} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default CityImage
