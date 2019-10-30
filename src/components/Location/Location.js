import React from 'react'
import styles from './Location.module.scss'

const Location = ({ area }) => (
  <div className={styles.location}>
    <div className={styles.innerArea}>
      <div>
        <h4>Location</h4>
        <h1>{area}</h1>
      </div>
      <button onClick={() => alert('change location clicked')}>
        Change location
      </button>
    </div>
  </div>
)

export default Location
