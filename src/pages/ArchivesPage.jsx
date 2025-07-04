import React, { useState } from 'react';
import NoteCard from '../components/NoteCard';
import SearchBar from '../components/SearchBar';
import { getArchivedNotes, unarchiveNote } from '../utils/local-data';

export default function ArchivesPage() {
  const [keyword, setKeyword] = useState('');
  const [notes, setNotes] = useState(getArchivedNotes());

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const handleUnarchive = (id) => {
    unarchiveNote(id);
    setNotes(getArchivedNotes());
  };

  return (
    <div className="page">
      <h2>Catatan Terarsip</h2>
      <SearchBar keyword={keyword} onKeywordChange={setKeyword} />

      {filteredNotes.length === 0 ? (
        <p>Tidak ada catatan terarsip</p>
      ) : (
        <div className="grid">
          {filteredNotes.map((note) => (
            <div key={note.id}>
              <NoteCard note={note} />
              <div className="note-card-footer">
                <button
                  className="accent small"
                  onClick={() => handleUnarchive(note.id)}
                >
                  Batal Arsip
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
