import React from 'react';
import styles from './Styles.module.css'
import spinner from '../bgimg/spinner.gif'
import { countries } from './countries'
import axios from 'axios';

const key = process.env.REACT_APP_API_KEY

const Weather = ({ index }) => {

    const [weather, setWeather] = React.useState({})
    const [error, setError] = React.useState(false)

    React.useEffect(() => {

        const getData = async (city) => {

            const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${key}`;

            try {
                let data = await axios(url)
                data = data.data
               
                const { list, city } = data
                let weather = {
                    temp: list[0].main.temp.toFixed(),
                    city: city.name,
                    des: list[0].weather[0].description,
                    icon: `https://openweathermap.org/img/w/${list[0].weather[0].icon}.png`,
                    wind: list[0].wind.speed.toFixed(),
                    pressure: list[0].main.pressure
                }

                setWeather(weather)

            } catch (error) {
                console.error(error)
                setError(true)
            }
        }

        getData(`${countries[index].capital}`)

    }, [index])

    return (
        <>
            <div className={styles.weatherHeader}>Current weather for: {countries[index].capital}</div>
            <div className={styles.weatherData} style={error ? { display: 'none' } : { display: 'flex' }}>
                <div className={styles.chart}>
                    <div className={styles.chart1}>Temp</div>
                    <div className={styles.chart2}>Sky</div>
                    <div className={styles.chart3}>Wind</div>
                    <div className={styles.chart4}>Pressure</div>
                </div>
                <div className={styles.data}>
                    <div className={styles.data1}>{`${Math.round(weather.temp)} \xB0C`}</div>
                    <div className={styles.data2}> <img src={`${weather.icon}`} alt="" /></div>
                    <div className={styles.data3}>{weather.wind} m/s</div>
                    <div className={styles.data4}>{weather.pressure} hPa</div>
                </div>
            </div>

            <div className={styles.loader} style={error ? { display: 'flex' } : { display: 'none' }}>
                <div className={styles.loadMessage}>Oooops, no data</div>
                <img src={spinner} alt="" className={styles.spinner} />
                <div className={styles.loadMessage}>Wait or refresh</div>
            </div>
        </>
    )
}

export default Weather
