"use client"

import React, { createContext, useContext, useState, useEffect } from "react"
import { checkLoginStatus } from "@/utils/loginstatus"

type UserAuthContextType = {
  user?: any | null
  loggedIn: boolean
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
      const status = await checkLoginStatus()
      setLoginState(status)
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
