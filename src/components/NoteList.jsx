function NoteList({ notes, deleteNote }) {
  return (
    <div className="space-y-4">
      {notes.length === 0 && <p className="text-gray-500">No notes yet.</p>}
      {notes.map((note) => (
        <div key={note.id} className="border p-4 rounded shadow-sm">
          <h2 className="font-semibold">{note.title}</h2>
          <p>{note.desc}</p>
          <button
            onClick={() => deleteNote(note.id)}
            className="text-red-500 text-sm mt-2"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default NoteList;
