import React, { useState } from 'react';

function App() {
  const [notes, setNotes] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [dateValue, setDateValue] = useState('');

  const handleAddNote = () => {
    if (inputValue !== '') {
      const newNotes = [...notes, { note: inputValue, date: dateValue }];
      setNotes(newNotes);
      setInputValue('');
      setDateValue('');
    }
  };

  const handleDeleteNote = (index) => {
    const newNotes = [...notes];
    newNotes.splice(index, 1);
    setNotes(newNotes);
  };

  const filteredNotes = notes.filter((note) =>
    note.note.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div>
      <h1>Notes App</h1>
      <input
        type="text"
        placeholder="Enter a new note"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter a date (optional)"
        value={dateValue}
        onChange={(e) => setDateValue(e.target.value)}
      />
      <button onClick={handleAddNote}>Add Note</button>
      <input
        type="text"
        placeholder="Search Notes"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <ul>
        {filteredNotes.map((note, index) => (
          <li key={index}>
            {note.note} - {note.date}{' '}
            <button onClick={() => handleDeleteNote(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;