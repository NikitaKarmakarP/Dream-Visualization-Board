import React from 'react';
import Note from './Note';
import '../styles/Board.css';

const Board = ({ notes, setNotes }) => {
  const addNote = () => {
    const newNote = { id: Date.now(), text: 'New Goal', x: 100, y: 100 };
    setNotes([...notes, newNote]);
  };

  return (
    <div className="board">
      <button className="add-btn" onClick={addNote}>+ Add Goal</button>
      {notes.map(note => (
        <Note key={note.id} note={note} setNotes={setNotes} />
      ))}
    </div>
  );
};

export default Board;
