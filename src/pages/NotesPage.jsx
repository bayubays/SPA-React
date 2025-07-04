import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteCard from '../components/NoteCard';
import SearchBar from '../components/SearchBar';
import { getActiveNotes, deleteNote, archiveNote } from '../utils/local-data';
import About from '../pages/AboutPage';

export default function NotesPage() {
  const [notes, setNotes] = useState(getActiveNotes());
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('q') || '';

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const handleDelete = (id) => {
    deleteNote(id);
    setNotes(getActiveNotes());
  };

  const handleArchive = (id) => {
    archiveNote(id);
    setNotes(getActiveNotes());
  };

  const handleKeywordChange = (value) => {
    setSearchParams({ q: value });
  };

  return (
    <div className="page">
      <About />
      <h2>Daftar Catatan</h2>
      <SearchBar keyword={keyword} onKeywordChange={handleKeywordChange} />

      {filteredNotes.length === 0 ? (
        <p>Tidak ada catatan</p>
      ) : (
        <div className="grid">
          {filteredNotes.map((note) => (
            <div key={note.id}>
              <NoteCard note={note} />
              <div className="note-card-footer" style={{ marginTop: '1rem' }}>
                <button
                  className="accent small"
                  onClick={() => handleArchive(note.id)}
                >
                  Arsipkan
                </button>
                <button
                  className="danger small"
                  onClick={() => handleDelete(note.id)}
                >
                  Hapus
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
