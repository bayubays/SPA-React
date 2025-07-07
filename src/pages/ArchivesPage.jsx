import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteCard from '../components/NoteCard';
import SearchBar from '../components/SearchBar';
import { getArchivedNotes, unarchiveNote } from '../utils/network-data';

export default function ArchivesPage() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('q') || '';

  useEffect(() => {
    const fetchNotes = async () => {
      setLoading(true);
      const { error, data } = await getArchivedNotes();
      if (!error) {
        setNotes(data);
      } else {
        alert('Gagal memuat catatan terarsip.');
      }
      setLoading(false);
    };

    fetchNotes();
  }, []);

  const handleUnarchive = async (id) => {
    const { error } = await unarchiveNote(id);
    if (!error) {
      const { data } = await getArchivedNotes();
      setNotes(data);
    } else {
      alert('Gagal membatalkan arsip.');
    }
  };

  const handleKeywordChange = (value) => {
    setSearchParams({ q: value });
  };

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  if (loading) {
    return <p>Loading catatan terarsip...</p>;
  }

  return (
    <div className="page">
      <h2>Catatan Terarsip</h2>
      <SearchBar keyword={keyword} onKeywordChange={handleKeywordChange} />

      {filteredNotes.length === 0 ? (
        <p>Tidak ada catatan terarsip</p>
      ) : (
        <div className="grid">
          {filteredNotes.map((note) => (
            <div key={note.id}>
              <NoteCard note={note} />
              <div className="note-card-footer" style={{ marginTop: '1rem' }}>
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
