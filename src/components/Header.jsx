import React, { useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';
import LocaleContext from '../contexts/LocaleContext';
import { putAccessToken } from '../utils/network-data';

export default function Header() {
  const { auth, setAuth } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const { locale, toggleLocale } = useContext(LocaleContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    const confirm = window.confirm(
      locale === 'id'
        ? 'Apakah Anda yakin ingin logout?'
        : 'Do you really want to logout?'
    );
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
      <NavLink to="/notes">
        {locale === 'id' ? 'Catatan' : 'Notes'}
      </NavLink>
      <NavLink to="/archives">
        {locale === 'id' ? 'Arsip' : 'Archives'}
      </NavLink>
      <NavLink to="/notes/new">
        {locale === 'id' ? 'Tambah Catatan' : 'Add Note'}
      </NavLink>
      <NavLink to="/about">
        {locale === 'id' ? 'Tentang' : 'About'}
      </NavLink>

      {/* Tombol Theme */}
      <button onClick={toggleTheme}>
        {locale === 'id'
          ? `Ubah ke ${theme === 'light' ? 'Gelap🌙' : 'Terang🌞'}`
          : `Switch to ${theme === 'light' ? 'Dark🌙' : 'Light🌞'}`}
      </button>

      {/* Tombol Locale */}
      <button onClick={toggleLocale}>
        {locale === 'id' ? '🇮🇩 id' : '🇺🇸 en'}
      </button>

      {auth.user ? (
        <>
          <span>
            {locale === 'id' ? 'Hai' : 'Hi'}, {auth.user.name}
          </span>
          <button onClick={handleLogout}>
            {locale === 'id' ? 'Keluar' : 'Logout'}
          </button>
        </>
      ) : (
        <>
          <NavLink to="/register">
            {locale === 'id' ? 'Daftar' : 'Register'}
          </NavLink>
          <NavLink to="/login">
            {locale === 'id' ? 'Masuk' : 'Login'}
          </NavLink>
        </>
      )}
    </nav>
  );
}
