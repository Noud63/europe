import React from 'react'
import styles from './Styles.module.css'
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { countries } from './countries'
import { useGlobalContext } from './Context';
import { arms } from './Assets'

const Readmore = () => {
    
    let { index } = useGlobalContext();
    
    return (
        <div className={styles.wrapper2}>
            <div className={styles.container2}>

                <div className={styles.storyHeader}>
                    <div className={styles.historytitle}>{countries[index].title}</div>
                </div>
                
                <div className={styles.story}>{countries[index].story}</div>
                
                <Link to="/" className={styles.readmoreBack}>
                    <span className={styles.back}>go back</span>
                </Link>

                <div className={styles.arms}><img src={process.env.PUBLIC_URL + `/arms/${arms[index]}`} alt="" className={styles.armsPic} /></div>

            </div>
        </div>
        )
}

export default Readmore
