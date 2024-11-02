"use client"

import React, { useContext, useEffect, useState } from "react"
import { ThemeContext, ThemeContextType } from "@/context/ThemeContext"

const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { colorTheme } = useContext(ThemeContext) as ThemeContextType
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (mounted) {
    return <div className={colorTheme + "-theme"}>{children}</div>
  }

  return null
}

export default ThemeProvider
