"use client"

import React, { useState } from "react"
import styles from "./AuthLinks.module.css"
import Link from "next/link"
import { useUserAuth } from "@/context/UserAuthContext"
import { useRouter } from "next/navigation"

const AuthLinks: React.FC = () => {
  const [open, setOpen] = useState(false)
  const { loggedIn, user, setLoginState } = useUserAuth()
  const router = useRouter()

  const handleLogoutRequest = async () => {
    try {
      const response = await fetch("/api/simplelogout", {
        method: "POST",
      })

      const result = await response.json()

      if (response.ok) {
        setLoginState({ loggedIn: false, user: null })
        router.push("/")
      }
    } catch (error) {
      console.error("handleLogoutRequest  :  error, inside catch == ", error)
    }
  }

  return (
    <>
      {loggedIn ? (
        <>
          <Link href="/createpost">Create</Link>
          <span onClick={handleLogoutRequest} className={styles.link}>
            Logout
          </span>
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
          {loggedIn ? (
            <>
              <Link href="/createpost" className={styles["burger-menu-link"]}>
                Create
              </Link>
              <span
                onClick={handleLogoutRequest}
                className={`${styles.link} ${styles["burger-menu-link"]}`}
              >
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
