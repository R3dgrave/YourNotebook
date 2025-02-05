import React from 'react';

const LabelItem = ({ item, onEdit, onDelete }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center bg-background p-2 rounded border border-border shadow-sm flex-wrap md:flex-nowrap">
      <span className="text-textPrimary text-sm w-full md:w-auto text-center md:text-start">{item.name}</span>
      <div className="flex sm:flex-row lg:flex-col gap-2 justify-center lg:justify-end w-full md:w-auto pt-2 md:mt-0">
        <button
          onClick={() => onEdit(item)}
          className="btn btn-xs bg-tag text-black hover:bg-yellow-300"
        >
          Editar
        </button>
        <button
          onClick={() => onDelete(item.id)}
          className="btn btn-xs bg-action text-white hover:bg-red-600"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default LabelItem;
