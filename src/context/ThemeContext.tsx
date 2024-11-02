"use client"

import { createContext, useState, useEffect } from "react"

export type ThemeContextType = {
  colorTheme: string
  setColorTheme: React.Dispatch<React.SetStateAction<string>>
  toggleTheme: () => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
)

const getThemeFromLocalStorage = (): string => {
  try {
    const value = localStorage.getItem("colorTheme")
    return value || "dark"
  } catch {
    return "dark"
  }
}

export const ThemeContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [colorTheme, setColorTheme] = useState("dark")

  const toggleTheme = () => {
    console.log("toggleTheme  :  colorTheme == ", colorTheme)
    setColorTheme(colorTheme === "light" ? "dark" : "light")
  }

  useEffect(() => {
    setColorTheme(getThemeFromLocalStorage())
  }, [])

  useEffect(() => {
    localStorage.setItem("colorTheme", colorTheme)
  }, [colorTheme])

  return (
    <ThemeContext.Provider value={{ colorTheme, setColorTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider
