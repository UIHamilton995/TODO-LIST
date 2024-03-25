import React from 'react';

interface CompleteTodoButtonProps {
  onClick: () => void;
}

const CompleteTodoButton: React.FC<CompleteTodoButtonProps> = ({ onClick }) => {
  return (
    <button onClick={onClick} className="bg-blue-500 text-white px-2 py-1 mr-2 rounded-md hover:bg-blue-600">
      Complete
    </button>
  );
};

export default CompleteTodoButton;
