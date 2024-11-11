import React from "react"
import styles from "./Menu.module.css"
import Link from "next/link"
import Image from "next/image"
import SideMenuPosts from "../sideMenuPosts/SideMenuPosts"
import SideMenuCategories from "../sideMenuCategories/SideMenuCategories"

const Menu: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.sideMenuSubtitle}>What's Hot?</h2>
      <h1 className={styles.sideMenuTitle}>Popular Posts</h1>
      <SideMenuPosts withImage={false} />

      {/* Category section */}
      <SideMenuCategories />

      <div className={styles.categoryContainer}>
        <h2 className={styles.sideMenuSubtitle}>Discover by Topic</h2>
        <h1 className={styles.sideMenuTitle}>Categories</h1>
        <div className={styles.categoryList}>
          <Link
            href="/blog?cat=coding"
            className={`${styles.categoryItem} ${styles.coding}`}
          >
            Coding
          </Link>
          <Link
            href="/blog?cat=music"
            className={`${styles.categoryItem} ${styles.music}`}
          >
            Music
          </Link>
          <Link
            href="/blog?cat=film"
            className={`${styles.categoryItem} ${styles.film}`}
          >
            Film
          </Link>
          <Link
            href="/blog?cat=gaming"
            className={`${styles.categoryItem} ${styles.gaming}`}
          >
            Gaming
          </Link>
          <Link
            href="/blog?cat=food"
            className={`${styles.categoryItem} ${styles.food}`}
          >
            Food
          </Link>
          <Link
            href="/blog?cat=philosophy"
            className={`${styles.categoryItem} ${styles.philosophy}`}
          >
            Philosophy
          </Link>
        </div>
      </div>
      {/* 2nd section */}
      <h2 className={styles.sideMenuSubtitle}>Chosen by the author</h2>
      <h1 className={styles.sideMenuTitle}>Author's Picks</h1>

      <SideMenuPosts withImage={true} />
    </div>
  )
}

export default Menu
