"use client"

import React, { createContext, useContext, useState, useEffect } from "react"

type UserAuthContextType = {
  loggedIn: boolean
  user?: any | null
  setLoginState: (state: { loggedIn: boolean; user: any }) => void
}

const UserAuthContext = createContext<UserAuthContextType | undefined>(
  undefined
)

export const UserAuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [loginState, setLoginState] = useState<{
    loggedIn: boolean
    user?: any | null
  }>({ loggedIn: false, user: null })

  useEffect(() => {
    const fetchLoginStatus = async () => {
      try {
        const response = await fetch("/api/checklogin")
        const result = await response.json()
        if (response.ok) {
          setLoginState({ loggedIn: result.loggedIn, user: result.user })
        } else {
          setLoginState({ loggedIn: false, user: null })
        }
      } catch (error) {
        setLoginState({ loggedIn: false, user: null })
      }
    }

    fetchLoginStatus()
  }, [])

  return (
    <UserAuthContext.Provider value={{ ...loginState, setLoginState }}>
      {children}
    </UserAuthContext.Provider>
  )
}

export const useUserAuth = () => {
  const context = useContext(UserAuthContext)
  if (!context) {
    throw new Error("useUserAuth must be used within a UserAuthProvider")
  }
  return context
}
