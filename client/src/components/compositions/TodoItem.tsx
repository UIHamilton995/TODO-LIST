// Component for displaying an individual todo item with options to edit and delete 
import React from 'react';
import EditTodoButton from '../elements/EditTodoButton';
import { IoMdCloseCircle } from 'react-icons/io';
import CompleteTodoButton from '../elements/CompleteTodoButton';

interface TodoItemProps {
  todo: string;
  closeModal: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, closeModal }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-4 rounded-md px-18 py-18">
        <h2 className="text-xl font-bold mb-2">
          Todo Details
          <button onClick={closeModal} className="bg-blue-500 text-white px-2 py-1 mt-2 hover:bg-blue-700 rounded-xl">
        < IoMdCloseCircle />
        </button>
        </h2>
        <p>{todo}</p>
        <CompleteTodoButton onClick={function (): void {
          throw new Error('Function not implemented.');
        }}
        />
        <EditTodoButton onClick={function (): void {
          throw new Error('Function not implemented.');
        } } />
      </div>
    </div>
  );
};


export default TodoItem;
