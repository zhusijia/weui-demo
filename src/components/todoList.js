import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo';

const TodoList = ({ todos, onTodoClick }) => {
  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <Todo key={index} {...todo} onClick={()=> onTodoClick(index)} />        
        )
      } )}
    </ul>
  )
}

TodoList.PropTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList