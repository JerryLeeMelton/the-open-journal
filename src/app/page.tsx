import React from "react"
import styles from "./page.module.css"

const Home: React.FC = () => {
  const title = "The Open Journal"

  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <p>This is the homepage of our application.</p>
    </div>
  )
}

export default Home
