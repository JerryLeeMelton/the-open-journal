"use client"

import React, { useContext } from "react"
import styles from "./ThemeToggle.module.css"
import Image from "next/image"
import { ThemeContext } from "@/context/ThemeContext"

const ThemeToggle: React.FC = () => {
  const toggleIconsize: number = 14
  const { colorTheme, toggleTheme } = useContext(ThemeContext) || {
    colorTheme: "light",
  }

  return (
    <div
      className={styles.container}
      onClick={toggleTheme}
      style={
        colorTheme === "dark"
          ? { backgroundColor: "white" }
          : { backgroundColor: "black" }
      }
    >
      <Image
        src="/moon.png"
        alt="moon"
        width={toggleIconsize}
        height={toggleIconsize}
      />
      <div
        className={styles.ball}
        style={
          colorTheme === "dark"
            ? {
                left: 1,
                right: "unset",
                backgroundColor: "black",
              }
            : {
                right: 1,
                left: "unset",
                backgroundColor: "white",
              }
        }
      ></div>
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
