import { useState } from 'react';

function NoteInput({ addNote }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !desc) return;

    addNote({ id: Date.now(), title, desc });
    setTitle('');
    setDesc('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 space-y-2">
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border p-2 w-full"
      />
      <textarea
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
        className="border p-2 w-full"
      />
      <button className="bg-blue-500 text-white px-4 py-2 rounded">Add Note</button>
    </form>
  );
}

export default NoteInput;
