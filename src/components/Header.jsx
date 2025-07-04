import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="header">
      <NavLink to="/notes">Catatan</NavLink> | 
      <NavLink to="/archives">Arsip</NavLink> | 
      <NavLink to="/notes/new">Tambah Catatan</NavLink> | 
      <NavLink to="/about">About</NavLink>
    </nav>
  );
}
