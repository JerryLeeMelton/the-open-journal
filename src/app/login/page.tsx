"use client"

import { useState } from "react"
import styles from "./LoginPage.module.css"
import { useUserAuth } from "@/context/UserAuthContext"
import { useRouter } from "next/navigation"

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [message, setMessage] = useState("")
  const { loggedIn, user, setLoginState } = useUserAuth()
  const router = useRouter()

  const handleLoginRequest = async () => {
    if (username === "" || password === "") {
      setMessage("Username and password cannot be empty")
      return
    }

    try {
      const response = await fetch("/api/simplelogin", {
        method: "POST",
        body: JSON.stringify({ username, password }),
      })

      const result = await response.json()

      if (response.ok) {
        setMessage(result.message)
        setLoginState({ loggedIn: true, user: result.user })
        window.location.href = "/"
        router.push("/")
      } else {
        setMessage(result.message || "Login failed")
      }
    } catch (error) {
      console.error("handleLoginRequest  :  error, inside catch == ", error)
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <input
          type="text"
          placeholder="Username"
          className={styles.input}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className={styles.input}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={styles.socialButton} onClick={handleLoginRequest}>
          Log In
        </div>
        <p className={styles.message}>{message}</p>
      </div>
    </div>
  )
}

export default LoginPage
