// The Main (root/home) Page
import React, { useState } from 'react';
import AddTodoForm from './components/compositions/AddTodoForm';
import TodoList from './components/compounds/TodoList';
import TodoItemModal from './components/compositions/TodoItem';

const App: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [selectedTodo, setSelectedTodo] = useState<string | null>(null);

  const addTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };

  const handleTodoClick = (index: number) => {
    setSelectedTodo(todos[index]);
  };

  const closeModal = () => {
    setSelectedTodo(null);
  };

  return (
    <div className='w-full h-screen pt-2 px-3 py-8 bg-slate-300'>
      <div className="max-w-md mx-auto p-4 bg-slate-200 rounded-lg shadow-md">
        <h1 className='text-3xl font-bold underline bg-blue-500 text-center'>Hamilton.todoList</h1>
        <AddTodoForm addTodo={addTodo} />
      </div>
      <div className='mt-8'>
        <TodoList todos={todos} handleTodoClick={handleTodoClick} />
      </div>
      {selectedTodo && (
        <TodoItemModal todo={selectedTodo} closeModal={closeModal} />
      )}
    </div>
  );
};

export default App;
