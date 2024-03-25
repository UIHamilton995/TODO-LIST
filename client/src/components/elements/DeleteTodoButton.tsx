import React from 'react';
import { MdDelete } from 'react-icons/md';

interface DeleteButtonProps {
  onClick: () => void;
}

const DeleteTodoButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="bg-red-600 text-white px-2 py-1 hover:bg-red-800 rounded-xl flex flex-row items-center justify-center">
    <MdDelete />
      Delete
    </button>
  );
};

export default DeleteTodoButton;