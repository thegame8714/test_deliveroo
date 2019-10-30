import React from 'react'
import Header from './components/Header/Header'
import Location from './components/Location/Location'
import Window from './components/Window/Window'
import data from './data/restaurants.json'
import styles from './App.module.scss'

function App() {
  console.log(data)
  return (
    <div className={styles.app}>
      <Header username="Jane Smith" />
      <Location area={data.neighborhood} />
      <Window restaurantsList={data.restaurants} />
    </div>
  )
}

export default App
