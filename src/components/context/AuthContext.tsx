import React, { createContext, useCallback, useContext, useEffect, useState } from 'react'
import jwtDecode from 'jwt-decode'

interface AuthContextData {
  token: string,
  registerToken: (recivedToken: string) => void
  userId: string
  deleteToken: () => void
}

const AuthContext = createContext<AuthContextData | null>(null)

interface Props {
  children: React.ReactNode
}
const TOKEN_KEY = 'contact-app::token'

export function AuthProvider ({ children }: Props) {
  const [token, setToken] = useState('')
  const [userId, setUserId] = useState('')

  const initToken = useCallback((newToken: string) => {
    setToken(newToken)
    const decoded = jwtDecode<{ sub: string}>(newToken)
    setUserId(decoded.sub)
  }, [])

  useEffect(() => {
    const storedToken = localStorage.getItem(TOKEN_KEY)
    if (storedToken) {
      initToken(storedToken)
    }
  }, [initToken])

  const registerToken = useCallback((receivedToken: string) => {
    localStorage.setItem(TOKEN_KEY, receivedToken)
    initToken(receivedToken)
  }, [initToken])

  const deleteToken = useCallback(() => {
    setToken('')
    setUserId('')
    localStorage.removeItem(TOKEN_KEY)
  }, [])
  return (
    <AuthContext.Provider value={{ token, userId, registerToken, deleteToken }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
