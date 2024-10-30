import React from "react"
import styles from "./CardList.module.css"
import Pagination from "../pagination/Pagination"

const CardList = () => {
  return (
    <div className={styles.container}>
      CardList
      <Pagination></Pagination>
    </div>
  )
}

export default CardList
