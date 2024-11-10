import React from "react"
import Image from "next/image"
import styles from "./CategoryList.module.css"
import Link from "next/link"

const CategoryList: React.FC = () => {
  const categories = [
    { name: "Coding", slug: "coding" },
    { name: "Music", slug: "music" },
    { name: "Film", slug: "film" },
    { name: "Food", slug: "food" },
    { name: "MTG", slug: "mtg" },
    { name: "Philosophy", slug: "philosophy" },
  ]

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categories}>
        {categories.map((category) => (
          <Link
            href={`/blog?cat=${category.slug}`}
            className={`${styles.category} ${styles[category.slug]}`}
          >
            <Image
              src={`/${category.slug}.png`}
              alt=""
              className={styles.image}
              width={32}
              height={32}
            />
            {category.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default CategoryList
