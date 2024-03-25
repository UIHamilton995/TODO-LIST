// // Component for displaying an individual todo item with options to edit and delete 
import React from 'react';
import EditTodoButton from '../elements/EditTodoButton';
import { IoMdCloseCircle } from 'react-icons/io';
import CompleteTodoButton from '../elements/CompleteTodoButton';
import DeleteTodoButton from '../elements/DeleteTodoButton';

interface TodoItemProps {
  todo: string;
  closeModal: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, closeModal }) => {

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-opacity-75 flex justify-center items-center">
      <div className="bg-white p-8 rounded-xl max-w-xs sm:max-w-lg w-full">
        <h2 className="text-xl font-bold mb-2 flex justify-between">
          Todo
          <button onClick={closeModal} className="bg-blue-500 text-white px-2 hover:bg-blue-700 rounded-xl">
            <IoMdCloseCircle />
          </button>
        </h2>
        <p className="bg-gray-200 rounded-lg h-20 overflow-hidden overflow-ellipsis">{todo}</p>
        <div className="mt-4 flex flex-col justify-between gap-1">
          <CompleteTodoButton onClick={() => {}} />
          <EditTodoButton onClick={() => {}} />
          <DeleteTodoButton onClick={() => {}} />
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
