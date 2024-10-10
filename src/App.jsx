import React, { useState } from 'react';
import './App.css';
import Navbar1 from './components/Navbar.jsx/Navbar1';
import { v4 as uuidv4 } from 'uuid';
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

function App() {
  const [Todo, setTodo] = useState("");
  const [Todos, setTodos] = useState([]);

  const handleEdit = (id) => {
    const newTodos = Todos.map(item => {
      if (item.id === id) {
        const newText = prompt("Edit your todo:", item.Todo);
        if (newText) {
          return { ...item, Todo: newText };
        }
      }
      return item;
    });
    setTodos(newTodos);
  };

  const handleDelete = (id) => {
    const newTodos = Todos.filter(item => item.id !== id);
    setTodos(newTodos);
  };

  const handleAdd = () => {
    if (Todo.trim()) {
      setTodos([...Todos, { id: uuidv4(), Todo, isCompleted: false }]);
      setTodo("");
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const handleCheckbox = (e) => {
    const id = e.target.name;
    const newTodos = Todos.map(item => 
      item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setTodos(newTodos);
  };

  return (
    <>
      <Navbar1 />
      <div className=' bg-violet-200 md:h-[80vh] h-[100vh] md:my-5  md:rounded-lg w-full md:w-1/2 justify-center mx-auto'>
        <div className='p-5'>
          <h1 className='flex text-xl md:text-3xl mb-5 font-serif font-bold justify-center items-center md:mb-10'>iTask - Your Personal Task Manager</h1>
          <div>
            <h1 className='text-sm md:text-lg font-bold'>Add a Todo</h1>
          </div>

          <div className='flex flex-col justify-between items-center'>
            <input 
              onChange={handleChange} 
              value={Todo} 
              type="text" 
              placeholder="Enter a todo" 
              className="  w-full  my-3 px-4 py-2 rounded-2xl  " 
            />
            <button 
              onClick={handleAdd} 
              className="bg-violet-600 w-[60%] flex justify-center items-center hover:bg-violet-800 text-white font-bold py-2 px-4 rounded my-3"
            >
              Add
            </button>
          </div>
        </div>
        <div className='px-5 flex flex-col justify-between items-center'>
          <h1 className='text-sm md:text-lg font-bold'>Your Todo</h1>
          <div className="todos w-full">
            {!Todos.length && <p className='py-5 font-serif font-bold'>No todos yet. Add one above.</p>}
            {Todos.map(item => (
              
              <div key={item.id} className='w-full px-20 flex  justify-between items-center '>
                <div className='flex gap-2 space-x-1'>
                <input 
                  name={item.id} 
                  onChange={handleCheckbox} 
                  type="checkbox" 
                  checked={item.isCompleted} 
                />
                <p className={item.isCompleted ? "line-through text-gray-500" : ""}>
                  {item.Todo}
                </p>
                </div>
                <div className='space-x-2'>
                  <button 
                    onClick={() => handleEdit(item.id)} 
                    className="bg-violet-600 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded my-3"
                  >
                   <span className='flex justify-center items-center gap-1'><FaEdit /></span> 
                  
                  </button>
                  <button 
                    onClick={() => handleDelete(item.id)} 
                    className="bg-violet-600 hover:bg-violet-800 text-white font-bold py-2 px-4 rounded my-3"
                  >
             <span className='flex justify-center items-center gap-1'><MdDeleteForever /> </span> 

                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
