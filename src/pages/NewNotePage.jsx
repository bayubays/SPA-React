import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/local-data';

export default function NewNotePage() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  const onTitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const onBodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (title.trim() === '' && body.trim() === '') {
      alert('Judul dan isi catatan tidak boleh kosong!');
      return;
    }

    addNote({
      title,
      body,
    });

    navigate('/');
  };

  return (
    <div className="page">
      <h2>Tambah Catatan Baru</h2>
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Judul catatan"
          value={title}
          onChange={onTitleChangeHandler}
        />
        <textarea
          placeholder="Isi catatan"
          value={body}
          onChange={onBodyChangeHandler}
          rows="10"
        ></textarea>
        <button type="submit" className="accent">
          Simpan
        </button>
      </form>
    </div>
  );
}
