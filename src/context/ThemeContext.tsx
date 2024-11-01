"use client"

import { createContext, useState, useEffect } from "react"

type ThemeContextType = {
  theme: string
  setTheme: React.Dispatch<React.SetStateAction<string>>
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
)

const getThemeFromLocalStorage = (): string => {
  try {
    const value = localStorage.getItem("theme")
    return value || "light"
  } catch {
    return "light"
  }
}

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState("light")

  useEffect(() => {
    setTheme(getThemeFromLocalStorage())
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
