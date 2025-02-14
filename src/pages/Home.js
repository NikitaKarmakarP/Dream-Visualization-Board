import React, { useState, useEffect } from 'react';
import Board from '../components/Board';
import '../styles/Home.css';

const Home = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="home-container">
      <h1>Dream Visualization Board</h1>
      <Board notes={notes} setNotes={setNotes} />
    </div>
  );
};

export default Home;
