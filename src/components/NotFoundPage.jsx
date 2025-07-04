import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <h1>404 - Halaman Tidak Ditemukan</h1>
      <p>Ups! Sepertinya halaman yang Anda cari tidak tersedia.</p>
      <Link to="/notes">Kembali ke Daftar Catatan</Link>
    </div>
  );
}
