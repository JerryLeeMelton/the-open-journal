import React from "react"
import styles from "./Menu.module.css"
import Link from "next/link"
import Image from "next/image"
import SideMenuPosts from "../sideMenuPosts/SideMenuPosts"
import SideMenuCategories from "../sideMenuCategories/SideMenuCategories"

const Menu: React.FC = () => {
  return (
    <div className={styles.container}>
      {/* Popular Posts section */}
      <h2 className={styles.sideMenuSubtitle}>What's Hot?</h2>
      <h1 className={styles.sideMenuTitle}>Popular Posts</h1>
      <SideMenuPosts withImage={false} />

      {/* Category section */}
      <SideMenuCategories />

      {/* Author's Picks section */}
      <h2 className={styles.sideMenuSubtitle}>Chosen by the author</h2>
      <h1 className={styles.sideMenuTitle}>Author's Picks</h1>
      <SideMenuPosts withImage={true} />
    </div>
  )
}

export default Menu
