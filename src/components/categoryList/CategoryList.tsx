import React from "react"
import Image from "next/image"
import styles from "./CategoryList.module.css"
import Link from "next/link"

const CategoryList: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Categories</h1>
      <div className={styles.categories}>
        <div className={styles.category}>
          <Link href="/blog?cat=coding">
            <Image src="/coding.png" alt="" width={25} height={25} />
            Cat. Name
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CategoryList
