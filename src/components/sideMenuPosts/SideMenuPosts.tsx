import Link from "next/link"
import styles from "./SideMenuPosts.module.css"
import Image from "next/image"

interface SideMenuPostsProps {
  withImage: boolean
}

const SideMenuPosts: React.FC<SideMenuPostsProps> = ({ withImage }) => {
  return (
    <div className={styles.items}>
      <Link href="/" className={styles.item}>
        {withImage ? (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="whoops" fill className={styles.image} />
          </div>
        ) : null}
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
        {withImage ? (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="whoops" fill className={styles.image} />
          </div>
        ) : null}
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
        {withImage ? (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="whoops" fill className={styles.image} />
          </div>
        ) : null}
        <div className={styles.textContainer}>
          <span className={`${styles.postCategory} ${styles.film}`}>Film</span>
          <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
          <div className={styles.postDetails}>
            <span className={styles.author}>Jerry Lee Melton - </span>
            <span className={styles.date}>2024.11.09</span>
          </div>
        </div>
      </Link>

      <Link href="/" className={styles.item}>
        {withImage ? (
          <div className={styles.imageContainer}>
            <Image src="/p1.jpeg" alt="whoops" fill className={styles.image} />
          </div>
        ) : null}
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
  )
}

export default SideMenuPosts
