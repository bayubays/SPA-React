import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNote } from '../utils/network-data';

export default function NewNotePage() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onTitleChangeHandler = (event) => {
    setTitle(event.target.value);
  };

  const onBodyChangeHandler = (event) => {
    setBody(event.target.value);
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (title.trim() === '' && body.trim() === '') {
      alert('Judul dan isi catatan tidak boleh kosong!');
      return;
    }

    setLoading(true);
    const { error } = await addNote({ title, body });
    setLoading(false);

    if (!error) {
      navigate('/');
    } else {
      alert('Gagal menambahkan catatan.');
    }
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
        <button
          type="submit"
          className="accent"
          disabled={loading}
        >
          {loading ? 'Menyimpan...' : 'Simpan'}
        </button>
      </form>
    </div>
  );
}
