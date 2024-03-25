import React from 'react';
import { GiCheckMark } from 'react-icons/gi';

interface CompleteTodoButtonProps {
  onClick: () => void;
}

const CompleteTodoButton: React.FC<CompleteTodoButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="bg-green-500 text-white px-2 py-1 hover:bg-green-700 rounded-xl flex flex-row items-center justify-center">
      <GiCheckMark />
      <span className='ml-2'>Complete</span> 
    </button>
  );
};

export default CompleteTodoButton;
