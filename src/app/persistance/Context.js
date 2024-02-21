'use client'
import { createContext, useEffect, useState } from 'react'

export const AppContext = createContext(null)
export const Context = ({ children }) => {
  const [session, setSession] = useState(null)
  const [theme, setTheme] = useState('')

  useEffect(() => {
    const localStorageSession = JSON.parse(
      localStorage?.getItem('session') || null
    )
    const localStorageTheme = localStorage.getItem('theme') || 'light'
    setTheme(localStorageTheme)
    setSession(localStorageSession)
  }, [setSession, setTheme])
  return (
    <AppContext.Provider
      value={{
        session,
        setSession,
        theme,
        setTheme,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
