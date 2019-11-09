import React, { useState } from 'react'
import Header from './components/Header/Header'
import Location from './components/Location/Location'
import Window from './components/Window/Window'
import Filter from './components/Filter/Filter'
import data from './data/restaurants.json'
import styles from './App.module.scss'

function App() {
  const [restaurantList, setRestaurantList] = useState(data.restaurants)

  const filterRestaurants = tagName => {
    const filteredList = data.restaurants.filter(restaurant =>
      restaurant.tags.find(tag => tag === tagName)
    )
    setRestaurantList(filteredList)
  }
  return (
    <div className={styles.app}>
      <Header username="Jane Smith" />
      <Location area={data.neighborhood} />
      <Filter
        restaurantsList={data.restaurants}
        filterRestaurants={filterRestaurants}
      />
      <Window restaurantsList={restaurantList} />
    </div>
  )
}

export default App
