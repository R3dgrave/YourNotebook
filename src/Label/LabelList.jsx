import LabelItem from "./LabelItem";
import LabelsForm from './LabelsForm';
import useLabels from "./hooks/useLabels";

const LabelList = () => {
  const {
    items,
    editingItem,
    createLabel,
    updateLabel,
    deleteLabel,
    setEditingItem,
    cancelEdit,
  } = useLabels();

  return (
    <div className="p-4 bg-secondary/10 rounded-md shadow-sm border border-border md:max-w-sm w-full mx-auto">
      <h2 className="text-lg font-bold mb-4 text-primary text-center md:text-left">
        {editingItem ? 'Editar Etiqueta' : 'Agregar Etiqueta'}
      </h2>

      <LabelsForm
        onSubmit={editingItem ? updateLabel : createLabel}
        initialData={editingItem}
        onCancel={cancelEdit}
      />

      <h2 className="text-md font-semibold mt-6 mb-2 text-primary text-center md:text-left">Lista de Etiquetas</h2>
      {items.length === 0 ? (
        <p className="text-textSecondary text-center md:text-left">No hay etiquetas creadas.</p>
      ) : (
        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <LabelItem
              key={item.id}
              item={item}
              onEdit={setEditingItem}
              onDelete={deleteLabel}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default LabelList;
