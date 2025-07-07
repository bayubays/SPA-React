import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  getNote,
  deleteNote,
  archiveNote,
  unarchiveNote
} from '../utils/network-data';
import parser from 'html-react-parser';

export default function NoteDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchNote = async () => {
      const { error, data } = await getNote(id);
      if (!error) {
        setNote(data);
      } else {
        setError(true);
      }
      setLoading(false);
    };

    fetchNote();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error || !note) return <p>Catatan tidak ditemukan</p>;

  const handleDelete = async () => {
    await deleteNote(id);
    navigate('/notes');
  };

  const handleArchiveToggle = async () => {
    if (note.archived) {
      await unarchiveNote(id);
    } else {
      await archiveNote(id);
    }
    navigate('/notes');
  };

  return (
    <div className="page">
      <h2>{note.title}</h2>
      <small>{new Date(note.createdAt).toLocaleString()}</small>
      <div>{parser(note.body)}</div>
      <button onClick={handleArchiveToggle}>
        {note.archived ? 'Batal Arsip' : 'Arsipkan'}
      </button>
      <button onClick={handleDelete}>Hapus</button>
    </div>
  );
}
