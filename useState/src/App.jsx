import React, { useState } from 'react';

function App() {
  // Counter state
  const [count, setCount] = useState(0);
  
  // Name state with input field
  const [name, setName] = useState('');
  
  // Toggle state for show/hide
  const [isVisible, setIsVisible] = useState(true);
  
  // Array state for todo list
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a project', completed: false },
  ]);
  
  // Form input state
  const [newTodo, setNewTodo] = useState('');

  // Add new todo
  const addTodo = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    
    setTodos([
      ...todos,
      { id: Date.now(), text: newTodo, completed: false }
    ]);
    setNewTodo('');
  };

  // Toggle todo completion
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden p-6 space-y-6">
        {/* Counter Example */}
        <section className="space-y-2">
          <h1 className="text-2xl font-bold text-gray-800">Counter: {count}</h1>
          <div className="flex gap-2">
            <button 
              onClick={() => setCount(prev => prev + 1)}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
            >
              Increment
            </button>
            <button 
              onClick={() => setCount(prev => prev - 1)}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Decrement
            </button>
            <button 
              onClick={() => setCount(0)}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
            >
              Reset
            </button>
          </div>
        </section>

        {/* Name Input */}
        <section className="space-y-2">
          <h2 className="text-xl font-semibold text-gray-700">Hello, {name || 'Stranger'}!</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </section>

        {/* Toggle Example */}
        <section className="space-y-2">
          <button
            onClick={() => setIsVisible(!isVisible)}
            className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded"
          >
            {isVisible ? 'Hide' : 'Show'} Content
          </button>
          {isVisible && (
            <p className="p-4 bg-purple-50 text-purple-800 rounded">
              This content is now visible! The power of useState! 🚀
            </p>
          )}
        </section>

        {/* Todo List */}
        <section className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-700">Todo List</h2>
          <form onSubmit={addTodo} className="flex gap-2">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Add a new task"
              className="flex-1 p-2 border rounded focus:ring-2 focus:ring-green-500 focus:border-transparent"
            />
            <button 
              type="submit"
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
            >
              Add
            </button>
          </form>
          
          <ul className="space-y-2">
            {todos.map(todo => (
              <li 
                key={todo.id} 
                onClick={() => toggleTodo(todo.id)}
                className={`p-3 rounded cursor-pointer ${todo.completed ? 'bg-green-50 line-through text-gray-500' : 'bg-white border hover:bg-gray-50'}`}
              >
                {todo.text}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

export default App;