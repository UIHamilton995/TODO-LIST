import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

interface DeleteButtonProps {
  onClick: () => void;
}

const DeleteTodoButton: React.FC<DeleteButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="bg-blue-500 text-white px-2 py-1 mt-4 hover:bg-blue-700 rounded-xl">
    <IoMdCloseCircle />
      Delete
    </button>
  );
};

export default DeleteTodoButton;