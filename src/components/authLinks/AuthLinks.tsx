import React from "react"
import styles from "./AuthLinks.module.css"
import Link from "next/link"

const AuthLinks: React.FC = () => {
  // temporary auth status
  // const authStatus: string = "not-authenticated"
  const authStatus: string = "authenticated"

  return (
    <>
      {authStatus === "authenticated" ? (
        <>
          <Link href="/newpost">New Post</Link>
          <span className={styles.link}>Logout</span>
        </>
      ) : (
        <Link href="/login">Login</Link>
      )}
    </>
  )
}

export default AuthLinks
