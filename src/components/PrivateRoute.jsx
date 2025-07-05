import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

export default function PrivateRoute({ children }) {
  const { auth } = useContext(AuthContext);

  if (auth.initializing) {
    return null; 
  }

  if (!auth.user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
