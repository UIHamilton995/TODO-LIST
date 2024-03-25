import React, { useState } from 'react';
import { MdEdit } from 'react-icons/md';
import EditTodoForm from '../compositions/EditTodoForm'; // Import the EditTodoForm component

interface EditButtonProps {
  onSave: (editedTodo: string) => void; // Pass onSave prop to EditTodoForm
}

const EditTodoButton: React.FC<EditButtonProps> = ({ onSave }) => {
  const [showEditForm, setShowEditForm] = useState<boolean>(false); // State to control form visibility

  const handleEditClick = () => {
    setShowEditForm(true); // Show the edit form when the button is clicked
  };

  const handleCloseForm = () => {
    setShowEditForm(false); // Close the edit form
  };

  return (
    <>
      <button onClick={handleEditClick} className="bg-blue-500 text-white px-2 py-1 hover:bg-blue-700 rounded-xl flex flex-row items-center justify-center">
        <MdEdit />
        <span className='ml-2'>Edit</span> 
      </button>
      {showEditForm && <EditTodoForm onSave={onSave} onClose={handleCloseForm} todo={''} />} {/* Render the EditTodoForm when showEditForm is true */}
    </>
  );
};

export default EditTodoButton;
