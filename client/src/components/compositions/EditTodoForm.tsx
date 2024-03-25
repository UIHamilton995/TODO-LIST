// Component for editing an existing todo item 
import React, { useState, useEffect } from 'react';

interface EditTodoFormProps {
  todo: string;
  onSave: (editedTodo: string) => void;
  onClose: () => void;
}

const EditTodoForm: React.FC<EditTodoFormProps> = ({ todo, onSave, onClose }) => {
  const [editedTodo, setEditedTodo] = useState<string>('');

  useEffect(() => {
    setEditedTodo(todo);
  }, [todo]);

  const handleSave = () => {
    if (editedTodo.trim() !== '') {
      onSave(editedTodo);
      onClose();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-700 bg-opacity-75 flex justify-center items-center z-50">
      <div className="bg-white p-4 rounded-md">
        <h2 className="text-xl font-bold mb-2">Edit Todo</h2>
        <input
          type="text"
          value={editedTodo}
          onChange={(e) => setEditedTodo(e.target.value)}
          className='w-full h-10 outline-none px-2 mt-2 rounded-lg'
        />
        <div className="flex justify-end mt-4">
          <button onClick={onClose} className="bg-gray-300 text-gray-700 px-2 py-1 mr-2 rounded-md hover:bg-gray-400">
            Cancel
          </button>
          <button onClick={handleSave} className="bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditTodoForm;
