import React from 'react'
import RestaurantList from './presentational/RestaurantList.js'
import styles from './Window.module.scss'

const Window = ({ restaurantsList }) => (
  <div className={styles.innerArea}>
    <div className={styles.restaurantList}>
      <RestaurantList restaurants={restaurantsList} />
    </div>
  </div>
)

export default Window
