import React from "react"
import styles from "./Menu.module.css"
import Link from "next/link"
import Image from "next/image"

const Menu: React.FC = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.sideMenuSubtitle}>What's Hot?</h2>
      <h1 className={styles.sideMenuTitle}>Popular Posts</h1>

      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.postCategory} ${styles.coding}`}>
              Coding
            </span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.postDetails}>
              <span className={styles.author}>Jerry Lee Melton - </span>
              <span className={styles.date}>2024.11.09</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.postCategory} ${styles.music}`}>
              Music
            </span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.postDetails}>
              <span className={styles.author}>Jerry Lee Melton - </span>
              <span className={styles.date}>2024.11.09</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.postCategory} ${styles.film}`}>
              Film
            </span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.postDetails}>
              <span className={styles.author}>Jerry Lee Melton - </span>
              <span className={styles.date}>2024.11.09</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
          <div className={styles.textContainer}>
            <span className={`${styles.postCategory} ${styles.gaming}`}>
              Gaming
            </span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.postDetails}>
              <span className={styles.author}>Jerry Lee Melton - </span>
              <span className={styles.date}>2024.11.09</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Category section */}

      <div>
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

      <div className={styles.items}>
        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="whoops" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.postCategory} ${styles.coding}`}>
              Coding
            </span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.postDetails}>
              <span className={styles.author}>Jerry Lee Melton - </span>
              <span className={styles.date}>2024.11.09</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="whoops" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.postCategory} ${styles.music}`}>
              Music
            </span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.postDetails}>
              <span className={styles.author}>Jerry Lee Melton - </span>
              <span className={styles.date}>2024.11.09</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="whoops" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.postCategory} ${styles.film}`}>
              Film
            </span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.postDetails}>
              <span className={styles.author}>Jerry Lee Melton - </span>
              <span className={styles.date}>2024.11.09</span>
            </div>
          </div>
        </Link>

        <Link href="/" className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="whoops" fill className={styles.image} />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.postCategory} ${styles.gaming}`}>
              Gaming
            </span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.postDetails}>
              <span className={styles.author}>Jerry Lee Melton - </span>
              <span className={styles.date}>2024.11.09</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Menu
