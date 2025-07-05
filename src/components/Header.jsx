import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { putAccessToken } from '../utils/network-data';

export default function Header() {
  const { auth, setAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirm = window.confirm('Do you really want to logout?');
    if (!confirm) return;

    putAccessToken('');
    setAuth({
      user: null,
      initializing: false,
    });
    navigate('/login');
  };

  return (
    <nav className="header">
      <NavLink to="/notes">Catatan</NavLink>
      <NavLink to="/archives">Arsip</NavLink>
      <NavLink to="/notes/new">Tambah Catatan</NavLink>
      <NavLink to="/about">About</NavLink>

      {auth.user ? (
        <>
          <span>Hi, {auth.user.name}</span>
          <button onClick={handleLogout}>Logout</button>
        </>
      ) : (
        <>
          <NavLink to="/register">Register</NavLink>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </nav>
  );
}
