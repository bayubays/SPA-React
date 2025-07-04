import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getNote, deleteNote, archiveNote, unarchiveNote } from '../utils/local-data';
import { formatDate } from '../utils/date';
import parser from 'html-react-parser';

export default function NoteDetailPage() {
  const { id } = useParams();
  const note = getNote(id);
  const navigate = useNavigate();

  if (!note) {
    return <p>Catatan tidak ditemukan</p>;
  }

  const handleDelete = () => {
    deleteNote(id);
    navigate('/notes');
  };

  const handleArchiveToggle = () => {
    if (note.archived) {
      unarchiveNote(id);
    } else {
      archiveNote(id);
    }
    navigate('/notes');
  };

  return (
    <div className="page">
      <h2>{note.title}</h2>
      <small>{formatDate(note.createdAt)}</small>
      <div>{parser(note.body)}</div>
      <button onClick={handleArchiveToggle}>
        {note.archived ? 'Batal Arsip' : 'Arsipkan'}
      </button>
      <button onClick={handleDelete}>Hapus</button>
    </div>
  );
}
