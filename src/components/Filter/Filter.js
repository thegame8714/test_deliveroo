import React from 'react'

const Filter = ({ restaurantsList, filterRestaurants }) => {
  const tagList = {}
  // const tagsList = restaurantsList.flatMap(restaurant => restaurant.tags)
  for (var i = 0; i < restaurantsList.length; i++) {
    for (var j = 0; j < restaurantsList[i].tags.length; j++) {
      const currentTag = restaurantsList[i].tags[j]
      if (Object.keys(tagList).includes(currentTag)) {
        tagList[currentTag] = tagList[currentTag] + 1
      } else {
        tagList[currentTag] = 1
      }
    }
  }
  return (
    <>
      {Object.keys(tagList).map(tag => (
        <button
          onClick={() => filterRestaurants(tag)}
        >{`${tag}(${tagList[tag]})`}</button>
      ))}
    </>
  )
}

export default Filter
