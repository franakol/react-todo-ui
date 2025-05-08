import React from 'react';
import { toggleTodoStatus, deleteTodo } from '../services/api';

const TodoItem = ({ todo, onUpdate }) => {
  const handleToggleStatus = async () => {
    try {
      await toggleTodoStatus(todo.id, !todo.completed);
      onUpdate();
    } catch (error) {
      console.error('Error toggling todo status:', error);
    }
  };

  const handleDelete = async () => {
    try {
      await deleteTodo(todo.id);
      onUpdate();
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  return (
    <div className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <div className="todo-content">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleStatus}
          className="todo-checkbox"
        />
        <div className="todo-text">
          <h3 className="todo-title">{todo.title}</h3>
          {todo.description && (
            <p className="todo-description">{todo.description}</p>
          )}
          <p className="todo-date">
            Created: {new Date(todo.created_at).toLocaleString()}
          </p>
        </div>
      </div>
      <button onClick={handleDelete} className="delete-btn">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
