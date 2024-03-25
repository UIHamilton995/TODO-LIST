// Component for adding a new todo item 

// import React, { useState } from 'react';

// const AddTodoForm = () => {
//   const [todo, setTodo] = useState<string>('')
//   const [todos, setTodos] = useState<string[]>([])

//   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (todo.trim() !== '') {
//       setTodos([...todos, todo])
//       setTodo('');
//       console.log(todos)
//     }
//   };


//   return (
//     <>
//     <form
//       className='py-4 px-4 flex justify-center'
//       onSubmit={handleSubmit}
//     >
//       <input type="text"
//         placeholder='Enter here...'
//         value={todo}
//         onChange={(e) => setTodo(e.target.value)}
//         className='w-38 h-10 outline-none px-2 mt-2 rounded-lg'
//       />
//       <button
//         type="submit"
//         className='bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-2 m-1 h-12 rounded-md font-bold hover:bg-green-600'
//       >
//         Add Todo
//       </button>
//     </form>
//     </>
//   );
// };

// export default AddTodoForm;


// components/AddTodoForm.tsx
import React, { useState } from 'react';

interface AddTodoFormProps {
  addTodo: (todo: string) => void;
}

const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {
  const [todo, setTodo] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (todo.trim() !== '') {
      addTodo(todo);
      setTodo('');
    }
  };

  return (
    <form className='py-4 px-4 flex justify-center' onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder='Enter here...'
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className='w-38 h-10 outline-none px-2 mt-2 rounded-lg'
      />
      <button
        type="submit"
        className='bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-2 m-1 h-12 rounded-md font-bold hover:bg-green-600'
      >
        Add Todo
      </button>
    </form>
  );
};

export default AddTodoForm;
