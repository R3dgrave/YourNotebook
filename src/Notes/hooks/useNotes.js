import { useEffect, useState } from 'react';
import { getItems, saveItems } from '../../utils/storage';

const useNotes = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(getItems('notes'));
  }, []);

  const createNote = (note) => {
    const newNote = { ...note, id: Date.now() };
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    saveItems('notes', updatedNotes);
  };

  const updateNote = (note) => {
    const updatedNotes = notes.map((n) => (n.id === note.id ? note : n));
    setNotes(updatedNotes);
    saveItems('notes', updatedNotes);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
    saveItems('notes', updatedNotes);
  };

  return {
    notes,
    createNote,
    updateNote,
    deleteNote,
  };
};

export default useNotes;