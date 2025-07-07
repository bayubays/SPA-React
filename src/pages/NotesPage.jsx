import React, { useState, useEffect, useContext } from 'react';
import { useSearchParams } from 'react-router-dom';
import NoteCard from '../components/NoteCard';
import SearchBar from '../components/SearchBar';
import { getActiveNotes, deleteNote, archiveNote } from '../utils/network-data';
import About from '../pages/AboutPage';
import LocaleContext from '../contexts/LocaleContext';

export default function NotesPage() {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchParams, setSearchParams] = useSearchParams();

  const keyword = searchParams.get('q') || '';

  const { locale } = useContext(LocaleContext);

  useEffect(() => {
    const fetchNotes = async () => {
      setLoading(true);
      const { error, data } = await getActiveNotes();
      if (!error) {
        setNotes(data);
      } else {
        alert(
          locale === 'id'
            ? 'Gagal memuat catatan.'
            : 'Failed to load notes.'
        );
      }
      setLoading(false);
    };

    fetchNotes();
  }, [locale]); // supaya teks alert ikut update jika bahasa diganti

  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(keyword.toLowerCase())
  );

  const handleDelete = async (id) => {
    const { error } = await deleteNote(id);
    if (!error) {
      const { data } = await getActiveNotes();
      setNotes(data);
    } else {
      alert(
        locale === 'id'
          ? 'Gagal menghapus catatan.'
          : 'Failed to delete note.'
      );
    }
  };

  const handleArchive = async (id) => {
    const { error } = await archiveNote(id);
    if (!error) {
      const { data } = await getActiveNotes();
      setNotes(data);
    } else {
      alert(
        locale === 'id'
          ? 'Gagal mengarsipkan catatan.'
          : 'Failed to archive note.'
      );
    }
  };

  const handleKeywordChange = (value) => {
    setSearchParams({ q: value });
  };

  if (loading) {
    return (
      <p>{locale === 'id' ? 'Memuat catatan...' : 'Loading notes...'}</p>
    );
  }

  return (
    <div className="page">
      <About />
      <h2>{locale === 'id' ? 'Daftar Catatan' : 'Notes List'}</h2>
      <SearchBar keyword={keyword} onKeywordChange={handleKeywordChange} />

      {filteredNotes.length === 0 ? (
        <p>{locale === 'id' ? 'Tidak ada catatan' : 'No notes found'}</p>
      ) : (
        <div className="grid">
          {filteredNotes.map((note) => (
            <div key={note.id}>
              <NoteCard note={note} />
              <div
                className="note-card-footer"
                style={{ marginTop: '1rem' }}
              >
                <button
                  className="accent small"
                  onClick={() => handleArchive(note.id)}
                >
                  {locale === 'id' ? 'Arsipkan' : 'Archive'}
                </button>
                <button
                  className="danger small"
                  onClick={() => handleDelete(note.id)}
                >
                  {locale === 'id' ? 'Hapus' : 'Delete'}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
