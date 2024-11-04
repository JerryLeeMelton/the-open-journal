"use client"

import React, { useState } from "react"
import styles from "./AuthLinks.module.css"
import Link from "next/link"

const AuthLinks: React.FC = () => {
  const [open, setOpen] = useState(false)
  // temporary auth status
  const authStatus: string = "not-authenticated"
  // const authStatus: string = "authenticated"

  return (
    <>
      {authStatus === "authenticated" ? (
        <>
          <Link href="/newpost">New Post</Link>
          <span className={styles.link}>Logout</span>
        </>
      ) : (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      )}
      <div
        className={styles["burger-menu-button"]}
        onClick={() => setOpen(!open)}
      >
        <div className={styles["burger-line"]} />
        <div className={styles["burger-line"]} />
        <div className={styles["burger-line"]} />
      </div>
      {open && (
        <div className={styles["burger-menu"]}>
          <Link href="/" className={styles["burger-menu-link"]}>
            Homepage
          </Link>
          <Link href="/" className={styles["burger-menu-link"]}>
            About
          </Link>
          <Link href="/" className={styles["burger-menu-link"]}>
            Contact
          </Link>
          {authStatus === "authenticated" ? (
            <>
              <Link href="/newpost" className={styles["burger-menu-link"]}>
                New Post
              </Link>
              <span className={`${styles.link} ${styles["burger-menu-link"]}`}>
                Logout
              </span>
            </>
          ) : (
            <Link href="/login" className={styles["burger-menu-link"]}>
              Login
            </Link>
          )}
        </div>
      )}
    </>
  )
}

export default AuthLinks
