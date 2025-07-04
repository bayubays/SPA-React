import React from 'react';
import { Link } from 'react-router-dom';
import parser from 'html-react-parser';

function NoteCard({ note }) {
  return (
    <div className="note-card">
      <div className="note-card-image" />
      <div className="note-card-content">
        <h3>
          <Link to={`/notes/${note.id}`}>{note.title}</Link>
        </h3>
        <p>{parser(note.body)}</p>
        <div className="note-card-footer">
          <small>{new Date(note.createdAt).toLocaleDateString()}</small>
        </div>
      </div>
    </div>
  );
}

export default NoteCard;
