import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the context
const AuthContext = createContext();

// Hook for accessing auth data
export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  // Example: on mount, check localStorage or call /me endpoint to see if user is logged in
  useEffect(() => {
    const storedUser = localStorage.getItem('app_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // login function: call your API, get user data + token
  async function login(email, password) {
    // pseudo-code for login
    // const { data } = await axios.post('/api/auth/login', { email, password });
    // if (data.success) {
    //   setUser(data.user);
    //   localStorage.setItem('app_user', JSON.stringify(data.user));
    // }
    // For demonstration, let's just set a mock user:
    const mockUser = { id: '123', name: 'Test Admin', role: 'admin' };
    setUser(mockUser);
    localStorage.setItem('app_user', JSON.stringify(mockUser));
    return true;
  }

  // logout function
  function logout() {
    setUser(null);
    localStorage.removeItem('app_user');
  }

  const value = {
    user,
    login,
    logout
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
