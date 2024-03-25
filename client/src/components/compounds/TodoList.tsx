// Component for displaying a list of todo items  
import React from 'react';
import CompleteTodoButton from '../elements/CompleteTodoButton';
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
        <ul>
          {todos.map((todo, index) => (
            <li key={index}
              onClick={() => handleTodoClick(index)}
              className='bg-slate-400 rounded-lg h-10 py-2 text-left pl-3 text-clip'
            >
              {todo}
              <CompleteTodoButton onClick={function (): void {
                throw new Error('Function not implemented.');
              }}
              />
            </li>
          ))}
        </ul>
      )}
      </div>
    </>
  );
};

export default TodoList;

