import { useEffect, useState } from 'react';
import { getItems } from '../utils/storage';
import useNotes from './hooks/useNotes';
import NoteForm from './NoteForm';

const NoteList = () => {
  const { notes, createNote, updateNote, deleteNote } = useNotes();
  const [editingNote, setEditingNote] = useState(null);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    setLabels(getItems('labels'));
  }, []);

  return (
    <div className="flex flex-col lg:flex-row gap-4 bg-background text-textPrimary w-full">
      <div className='w-full lg:w-[30%]'>
        <h2 className="text-xl font-semibold mb-4 text-primary">Lista de Notas</h2>
        {notes.length === 0 ? (
          <p className="text-textSecondary">No hay notas creadas.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {notes.map((note) => (
              <div key={note.id} className="bg-white border border-border p-2 rounded-lg shadow-md text-sm">
                <h3 className="font-bold text-base text-primary truncate">{note.title}</h3>
                <p className="text-xs text-textSecondary">{note.date}</p>

                <div className="mt-1 text-textPrimary line-clamp-3" dangerouslySetInnerHTML={{ __html: note.content }} />

                <div className="flex gap-1 flex-wrap mt-1">
                  {note.labelIds.map((id) => {
                    const label = labels.find((l) => l.id === id);
                    return label ? (
                      <span key={id} className="bg-tag text-black text-xs px-1 py-0.5 rounded">
                        {label.name}
                      </span>
                    ) : null;
                  })}
                </div>

                <div className="flex flex-col gap-1 mt-2">
                  <button
                    onClick={() => setEditingNote(note)}
                    className="bg-secondary text-white px-2 py-0.5 rounded hover:bg-green-600 text-xs"
                  >
                    Editar
                  </button>
                  <button
                    onClick={() => deleteNote(note.id)}
                    className="bg-action text-white px-2 py-0.5 rounded hover:bg-red-600 text-xs"
                  >
                    Eliminar
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="divider divider-horizontal"></div>

      <div className='w-full lg:w-[70%]'>
        <h2 className="text-xl font-bold mb-4 text-primary">{editingNote ? 'Editar Nota' : 'Agregar Nota'}</h2>
        <NoteForm
          onSubmit={editingNote ? updateNote : createNote}
          initialData={editingNote}
          onCancel={() => setEditingNote(null)}
          labels={labels}
        />
      </div>
    </div>
  );
};

export default NoteList;
