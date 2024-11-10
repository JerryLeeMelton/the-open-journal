import React from "react"
import styles from "./Card.module.css"
import Image from "next/image"
import Link from "next/link"

const Card: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="whoops" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>2024.11.09 - </span>
          <span className={styles.category}>CODING</span>
        </div>
        <Link href="/">
          <h1>Title!</h1>
        </Link>

        <p className={styles.description}>
          Cras nunc magna, vehicula sed metus nec, cursus semper libero. Nunc
          dapibus nulla non turpis sollicitudin lacinia. Donec commodo tempor
          purus. Ut erat diam, imperdiet vel ultricies eget, congue nec magna.
          Curabitur viverra nibh id lacus scelerisque tempus. Phasellus
          sollicitudin porttitor ex ac mollis. Phasellus malesuada lacinia
          ligula, ac fringilla neque maximus eu.
        </p>
        <Link href="/" className={styles.readMoreLink}>
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Card
