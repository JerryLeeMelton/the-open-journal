"use client"

import React, { useContext } from "react"
import styles from "./ThemeToggle.module.css"
import Image from "next/image"
import { ThemeContext } from "@/context/ThemeContext"

const ThemeToggle: React.FC = () => {
  const toggleIconsize: number = 14
  const { theme } = useContext(ThemeContext) || { theme: "light" }

  console.log("ThemeToggle.tsx  :  theme == ", theme)

  return (
    <div className={styles.container}>
      <Image
        src="/moon.png"
        alt="moon"
        width={toggleIconsize}
        height={toggleIconsize}
      />
      <div className={styles.ball}></div>
      <Image
        src="/sun.png"
        alt="sun"
        width={toggleIconsize}
        height={toggleIconsize}
      />
    </div>
  )
}

export default ThemeToggle
