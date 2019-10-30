import React from 'react'
import Logo from './presentational/Logo'
import UserArea from './presentational/UserArea'
import styles from './Header.module.scss'

const Header = ({ username }) => (
  <header className={styles.header}>
    <Logo className={styles.logo} />
    <UserArea username={username} />
  </header>
)

export default Header
