import { useEffect, useRef, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const NoteForm = ({ onSubmit, initialData, onCancel, labels }) => {
  const [note, setNote] = useState({ title: '', date: '', content: '', labelIds: [] });
  const quillRef = useRef(null);

  useEffect(() => {
    if (initialData) setNote(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };

  const handleContentChange = (content) => {
    setNote((prevNote) => ({ ...prevNote, content }));
  };

  const handleLabelChange = (id) => {
    setNote((prev) => ({
      ...prev,
      labelIds: prev.labelIds.includes(id)
        ? prev.labelIds.filter((labelId) => labelId !== id)
        : [...prev.labelIds, id],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (note.title.trim() === '' || note.date.trim() === '') return;
    onSubmit(note);
    setNote({ title: '', date: '', content: '', labelIds: [] });
  };

  const handleCancel = () => {
    setNote({ title: '', date: '', content: '', labelIds: [] }); // Limpia el formulario si no hay datos iniciales
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 bg-white border border-border p-4 rounded-lg shadow-md">
      <div className='flex flex-col md:flex-row gap-2'>
        <input
          type="text"
          name="title"
          value={note.title}
          onChange={handleChange}
          placeholder="Título de la nota"
          className="w-full md:w-[60%] border border-border bg-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
        <input
          type="date"
          name="date"
          value={note.date}
          onChange={handleChange}
          className="w-full md:w-[40%] border border-border text-white p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
          required
        />
      </div>
      <ReactQuill
        ref={quillRef}
        value={note.content}
        onChange={handleContentChange}
        className="mb-2"
        placeholder='Escriba su nota aquí...'
      />
      <div className="flex gap-2 flex-wrap">
        {labels.map((label) => (
          <label key={label.id} className="flex items-center gap-1">
            <input
              type="checkbox"
              checked={note.labelIds.includes(label.id)}
              onChange={() => handleLabelChange(label.id)}
            />
            <span className="text-textPrimary">{label.name}</span>
          </label>
        ))}
      </div>

      <div className="flex gap-2">
        <button type="submit" className="bg-primary text-white px-4 py-2 rounded hover:bg-indigo-700">
          {initialData ? 'Actualizar' : 'Crear'}
        </button>
        {initialData && (
          <button type="button" onClick={handleCancel} className="bg-border text-textPrimary px-4 py-2 rounded hover:bg-gray-300">
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

export default NoteForm;
