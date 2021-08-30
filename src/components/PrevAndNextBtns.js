import React from 'react'
import styles from './Styles.module.css'

const PrevAndNextBtns = ({ increment, decrement }) => {

    return (
        <>
            <div className={styles.buttonBox}>
                <div className={styles.btns}>
                    <button className={styles.btn + " " + styles.prevBtn} onClick={decrement}>prev</button>
                </div>
                <div className={styles.btns}>
                    <button className={styles.btn + " " + styles.nextBtn} onClick={increment}>next</button>
                </div>
            </div>
        </>
    )
}

export default PrevAndNextBtns


