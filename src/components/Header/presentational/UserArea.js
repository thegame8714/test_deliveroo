import React from 'react'
import styles from './UserArea.module.scss'

const UserMenuLogo = () => (
  <svg width="12" height="16" xmlns="http://www.w3.org/2000/svg">
    <g fill="none" fillRule="evenodd">
      <path d="M-6-4h24v24H-6z" />
      <path
        d="M2.25 5.75A3.754 3.754 0 016 2a3.754 3.754 0 013.75 3.75A3.754 3.754 0 016 9.5a3.754 3.754 0 01-3.75-3.75m6.546 4.443a5.25 5.25 0 10-5.592 0A6.005 6.005 0 000 15.5h1.5C1.5 13.019 3.519 11 6 11s4.5 2.019 4.5 4.5H12c0-2.3-1.3-4.3-3.204-5.307M4.5 6.5a.75.75 0 100-1.5.75.75 0 000 1.5m3 0a.75.75 0 100-1.5.75.75 0 000 1.5"
        fill="#00CCBC"
      />
    </g>
  </svg>
)

const UserArea = ({ username }) => (
  <div className={styles.userArea}>
    <UserMenuLogo />
    <p className={styles.userName}>{username}</p>
  </div>
)

export default UserArea
