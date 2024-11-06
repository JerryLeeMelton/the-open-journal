import React from "react"
import Image from "next/image"
import styles from "./Featured.module.css"

const Featured: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hello! I'm Jerry Lee Melton</b> and this is my online journal!
      </h1>
      <div className={styles.post}>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h2 className={styles.postTitle}>Coding Stuff Blah Blah</h2>

          <p className={styles.postDescription}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>

          <button className={styles.button}>Read More</button>
        </div>
      </div>
    </div>
  )
}

export default Featured
