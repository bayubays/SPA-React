import React, { useState, useEffect } from 'react';
import { AuthContext } from './AuthContext';
import { getUserLogged } from '../utils/network-data';

export default function AuthProvider({ children }) {
  const [auth, setAuth] = useState({
    user: null,
    initializing: true,
  });

  useEffect(() => {
    const fetchUser = async () => {
      const { error, data } = await getUserLogged();
      setAuth({
        user: error ? null : data,
        initializing: false,
      });
    };

    fetchUser();
  }, []);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
