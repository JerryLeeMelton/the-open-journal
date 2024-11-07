import React from "react"
import Image from "next/image"
import styles from "./CategoryList.module.css"
import Link from "next/link"

const CategoryList: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categories}>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.coding}`}
        >
          <Image
            src="/style.png"
            alt=""
            className={styles.image}
            width={32}
            height={32}
          />
          Coding
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.music}`}
        >
          <Image
            src="/style.png"
            alt=""
            className={styles.image}
            width={32}
            height={32}
          />
          Music
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.film}`}
        >
          <Image
            src="/style.png"
            alt=""
            className={styles.image}
            width={32}
            height={32}
          />
          Film
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.food}`}
        >
          <Image
            src="/style.png"
            alt=""
            className={styles.image}
            width={32}
            height={32}
          />
          Food
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.mtg}`}
        >
          <Image
            src="/style.png"
            alt=""
            className={styles.image}
            width={32}
            height={32}
          />
          MTG
        </Link>
        <Link
          href="/blog?cat=style"
          className={`${styles.category} ${styles.philosophy}`}
        >
          <Image
            src="/style.png"
            alt=""
            className={styles.image}
            width={32}
            height={32}
          />
          Philosophy
        </Link>
      </div>
    </div>
  )
}

export default CategoryList
