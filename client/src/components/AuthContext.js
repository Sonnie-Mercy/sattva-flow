import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000'; // Set your backend API URL

const AuthContext = createContext({
  isAuthenticated: false,
  user: null,
  login: () => {},
  logout: () => {},
  token: null,
});

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) {
      axios
        .get('/api/users/validate-token', {
          headers: { Authorization: `Bearer ${storedToken}` },
        })
        .then(response => {
          setUser(response.data.user);
          setIsAuthenticated(true);
          setToken(storedToken);
        })
        .catch(() => {
          logout(); // Clear invalid token
        });
    }
  }, []);

  const login = async (userData) => {
    try {
      const response = await axios.post('/api/users/login', userData);
      const { token, user } = response.data;
      setToken(token);
      localStorage.setItem('token', token);
      setUser(user);
      setIsAuthenticated(true);
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const logout = () => {
    setToken(null);
    localStorage.removeItem('token');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);