import React, { useState } from 'react'
import { datecity } from './datecity'
import { API_URL, API_KEY } from '../services/setting'
import logo from '../images/Andy.png'

const Card = () => {
  const [query, setquery] = useState('')
  const [weather, setweather] = useState({})

  const search = (evt) => {
    if (evt.key === 'Enter') {
      fetch(`${API_URL}weather?q=${query}&units=metric&APPID=${API_KEY}`)
        .then((res) => res.json())
        .then((result) => {
          setweather(result)
          setquery('')
          console.log(result)
        })
    }
  }

  return (
    <div
      className={
        typeof weather.main != 'undefined'
          ? weather.weather[0].main === 'Clouds'
            ? 'App clouds'
            : 'App'
            ? weather.weather[0].main === 'Clear'
              ? 'App clear'
              : 'App'
              ? weather.weather[0].main === 'Rain'
                ? 'App rain'
                : 'App'
              : 'App'
            : 'App'
          : 'App'
      }
    >
      {' '}
      <a href='/'>
        {' '}
        <img className='img' src={logo} alt='Andy Caseres' />
      </a>
      <main>
        <div>
          <input
            className='search'
            type='text'
            placeholder='Search...'
            onChange={(e) => setquery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
        {typeof weather.main != 'undefined' ? (
          <div>
            <div className='container-location'>
              <div className='location'>
                {weather.name} , {weather.sys.country}
              </div>
              <div className='data'>{datecity(new Date())}</div>
            </div>
            <div className='container-weather'>
              <div className='temp'>{Math.round(weather.main.temp)}ºC</div>
              <div className='weather'>{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
          ''
        )}
      </main>
    </div>
  )
}

export default Card
