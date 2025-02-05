import React, { useEffect, useState } from 'react';

const LabelsForm = ({ initialData, onSubmit, onCancel }) => {
  const [label, setLabel] = useState({ name: '' });

  useEffect(() => {
    if (initialData) setLabel(initialData);
  }, [initialData]);

  const handleChange = (e) => {
    setLabel({ ...label, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (label.name.trim() === '') return;
    onSubmit(label);
    setLabel({ name: '' });
  };

  const handleCancel = () => {
    setLabel({ name: '' }); // Limpia el formulario si no hay datos iniciales
    onCancel();
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-2 items-center mb-4">
      <input
        type="text"
        name="name"
        value={label.name}
        onChange={handleChange}
        placeholder="Nombre de la etiqueta"
        required
        className="input input-bordered w-full input-md bg-white focus:outline-none focus:ring-2 focus:ring-primary"
      />
      <div className="flex flex-col md:flex-row gap-2 w-full md:w-auto mt-2">
        <button
          type="submit"
          className="btn lg:btn-sm bg-primary text-white hover:bg-indigo-700"
        >
          {initialData ? 'Actualizar' : 'Crear'}
        </button>
        {initialData && (
          <button
            type="button"
            onClick={handleCancel}
            className="btn w-full md:w-auto bg-border text-textSecondary hover:bg-gray-300"
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

export default LabelsForm;
