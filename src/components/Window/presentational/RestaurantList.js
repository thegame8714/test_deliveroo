import React from 'react'
import styles from './RestaurantList.module.scss'

const Tags = ({ tags }) =>
  tags.map((tag, index) => (
    <span key={index} className={styles.tag}>
      {tag}
    </span>
  ))

const Price = ({ price }) => {
  const showPriceInPounds = []

  for (var i = 0; i < price; i++) {
    showPriceInPounds.push('£')
  }
  return <span className={styles.price}>{showPriceInPounds.join('')}</span>
}

const RestaurantList = ({ restaurants }) => {
  console.log(restaurants)
  return restaurants.map(restaurant => (
    <div key={restaurant.id} className={styles.restaurant}>
      <img src={restaurant.image} alt={restaurant.name} />
      <h2>{restaurant.name}</h2>
      <Tags tags={restaurant.tags} />
      <Price price={restaurant.price} />
    </div>
  ))
}

export default RestaurantList
