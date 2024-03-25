// components/EditButton.tsx
import React from 'react';
import { IoMdCloseCircle } from 'react-icons/io';

interface EditButtonProps {
  onClick: () => void;
}

const EditTodoButton: React.FC<EditButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="bg-blue-500 text-white px-2 py-1 mt-4 hover:bg-blue-700 rounded-xl">
    <IoMdCloseCircle />
      Edit
    </button>
  );
};

export default EditTodoButton;
