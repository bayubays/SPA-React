import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NotesPage from './pages/NotesPage';
import ArchivesPage from './pages/ArchivesPage';
import NoteDetailPage from './pages/NoteDetailPage';
import NewNotePage from './pages/NewNotePage';
import AboutPage from './pages/AboutPage';
import NotFoundPage from './components/NotFoundPage';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import PrivateRoute from './components/PrivateRoute';    

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <NotesPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/notes"
          element={
            <PrivateRoute>
              <NotesPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/archives"
          element={
            <PrivateRoute>
              <ArchivesPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/notes/new"
          element={
            <PrivateRoute>
              <NewNotePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/notes/:id"
          element={
            <PrivateRoute>
              <NoteDetailPage />
            </PrivateRoute>
          }
        />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
