import React from 'react'
import RestaurantList from './presentational/RestaurantList.js'
import styles from './Window.module.scss'

const Window = ({ restaurantsList }) => (
  <div className={styles.innerArea}>
    <h3 className={styles.restaurantNumber}>
      {restaurantsList.length} Restaurant
      {`${restaurantsList.length > 1 ? 's' : ''}`}
    </h3>
    <div className={styles.restaurantList}>
      <RestaurantList restaurants={restaurantsList} />
    </div>
  </div>
)

export default Window
