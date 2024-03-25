// Component for displaying a list of todo items  
import React from 'react';
interface TodoListProps {
  todos: string[];
  handleTodoClick: (index: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, handleTodoClick }) => {
  return (
    <>
      <div className=''>
      {todos.length === 0 ? (
        <p className='bg-slate-400 rounded-lg h-10'>No todos found</p>
      ) : (
        <ul className='space-y-2'>
          {todos.map((todo, index) => (
            <li key={index}
              onClick={() => handleTodoClick(index)}
              className='bg-slate-400 rounded-lg h-10 py-2 flex justify-between text-left px-3'
            >
              {todo}
              <div className='bg-gray-600 text-white px-2 py-1 hover:bg-gray-800 rounded-lg flex flex-row items-center justify-center'>
                View
              </div>
            </li>
          ))}
        </ul>
      )}
      </div>
    </>
  );
};

export default TodoList;

