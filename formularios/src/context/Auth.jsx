import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  async function singIn({ username, password }) {
    try {
      const response = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if(!response.ok){
        throw new Error('Falha no login.')
      }

      const data = await response.json()
      setUser(data)
      localStorage.setItem('user', JSON.stringify(data))
    } catch (error) {
        console.error('Erro durante o login:', error)
    }
  }

  function signOut(){
    setUser(null)
    localStorage.removeItem('user')
  }

  return(
    <AuthContext.Provider value={{ user, signIn, signOut }}>
        {children}
    </AuthContext.Provider>
  )
}

function useAuth(){
    return useContext(AuthContext)
}

export { AuthProvider, useAuth }
