import { useEffect, useState } from 'react';
import { getItems, saveItems } from '../../utils/storage';

const useLabels = () => {
  const [items, setItems] = useState([]);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    setItems(getItems('labels'));
  }, []);

  const createLabel = (item) => {
    const newItem = { ...item, id: Date.now() };
    const updatedItems = [...items, newItem];
    setItems(updatedItems);
    saveItems('labels', updatedItems);
  };

  const updateLabel = (item) => {
    const updatedItems = items.map((i) => (i.id === item.id ? item : i));
    setItems(updatedItems);
    saveItems('labels', updatedItems);
    setEditingItem(null);
  };

  const deleteLabel = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
    saveItems('labels', updatedItems);
  };

  const cancelEdit = () => {
    setEditingItem(null);
  };

  return {
    items,
    editingItem,
    createLabel,
    updateLabel,
    deleteLabel,
    setEditingItem,
    cancelEdit,
  };
}

export default useLabels;