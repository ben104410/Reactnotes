import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NoteInput from './components/NoteInput';
import NoteList from './components/NoteList';
import SearchBar from './components/SearchBar';
import Dashboard from './components/Dashboard';
import './index.css';
function App() {
  const [notes, setNotes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('notes');
    if (stored) setNotes(JSON.parse(stored));
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const addNote = (note) => setNotes([...notes, note]);
  const deleteNote = (id) => setNotes(notes.filter((note) => note.id !== id));
  const filteredNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Router>
      <Routes>
        {/* Notes App - Home route */}
        <Route
          path="/"
          element={
            <div className="p-4 max-w-2xl mx-auto">
              <h1 className="text-2xl font-bold mb-4">📝 Notes App</h1>
              <SearchBar setSearchQuery={setSearchQuery} />
              <NoteInput addNote={addNote} />
              <NoteList notes={filteredNotes} deleteNote={deleteNote} />
            </div>
          }
        />

        {/* Dashboard route */}
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;



