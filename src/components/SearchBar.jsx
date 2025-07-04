import React from 'react';

export default function SearchBar({ keyword, onKeywordChange }) {
  return (
    <input
      type="text"
      placeholder="Cari catatan..."
      value={keyword}
      onChange={(e) => onKeywordChange(e.target.value)}
    />
  );
}
