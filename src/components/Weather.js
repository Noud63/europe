import React from 'react';
import styles from './Styles.module.css'
import spinner from '../bgimg/spinner.gif'
import { countries } from './countries'
import axios from 'axios'

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
                    wind: list[0].wind.speed.toFixed()
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
                <div>
                    <div>Temperature: {`${Math.round(weather.temp)} \xB0C`}</div>
                    <div>{weather.des}</div>
                </div>
                <div>
                    <img src={`${weather.icon}`} alt="" />
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
