import { useState } from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './App.css';

function App() {
  const [refreshTodos, setRefreshTodos] = useState(false);
  
  const handleTodoAdded = () => {
    setRefreshTodos(prev => !prev);
  };

  return (
    <div className="container">
      <header>
        <h1>Todo List App</h1>
        <p>Keep track of your tasks and stay organized</p>
      </header>
      
      <main>
        <TodoForm onTodoAdded={handleTodoAdded} />
        
        <div className="card">
          <h2>Your Todos</h2>
          <TodoList key={refreshTodos ? 'refresh' : 'initial'} />
        </div>
      </main>
      
      <footer>
        <p>&copy; {new Date().getFullYear()} Todo List App</p>
      </footer>
    </div>
  );
}

export default App;
