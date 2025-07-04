import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NotesPage from './pages/NotesPage';
import ArchivesPage from './pages/ArchivesPage';
import NoteDetailPage from './pages/NoteDetailPage';
import NewNotePage from './pages/NewNotePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './components/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<NotesPage />} />
        <Route path="/notes" element={<NotesPage />} />
        <Route path="/archives" element={<ArchivesPage />} />
        <Route path="/notes/new" element={<NewNotePage />} />
        <Route path="/notes/:id" element={<NoteDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
