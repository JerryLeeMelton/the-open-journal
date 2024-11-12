import React from "react"
import styles from "./CategoryPage.module.css"
import CardList from "@/components/cardList/CardList"
import Menu from "@/components/Menu/Menu"

const CategoryPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.categoryTitle}>Coding</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  )
}

export default CategoryPage
