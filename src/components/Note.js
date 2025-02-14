import React, { useState } from 'react';
import '../styles/Note.css';

const Note = ({ note, setNotes }) => {
  const [position, setPosition] = useState({ x: note.x, y: note.y });
  const [text, setText] = useState(note.text);

  const handleDrag = (e) => {
    const newX = position.x + e.movementX;
    const newY = position.y + e.movementY;
    setPosition({ x: newX, y: newY });
    setNotes(prev => prev.map(n => (n.id === note.id ? { ...n, x: newX, y: newY } : n)));
  };

  return (
    <div
      className="note"
      style={{ left: position.x, top: position.y }}
      draggable
      onDrag={handleDrag}
    >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={() => setNotes(prev => prev.map(n => (n.id === note.id ? { ...n, text } : n)))}
      />
    </div>
  );
};

export default Note;
