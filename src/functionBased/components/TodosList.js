import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem';

function TodosList(props) {
  const {
    todos, handleChangeProps, deleteTodoProps, setUpdate,
  } = props;

  TodosList.propTypes = {
    todos: PropTypes.arrayOf(
      PropTypes.objectOf(
        { id: PropTypes.string, title: PropTypes.string, completed: PropTypes.bool },
      ),
    ),
    handleChangeProps: PropTypes.func,
    deleteTodoProps: PropTypes.func,
    setUpdate: PropTypes.func,

  };

  TodosList.defaultProps = {
    todos: [],
    handleChangeProps: () => {},
    deleteTodoProps: () => {},
    setUpdate: () => {},
  };

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleChangeProps={handleChangeProps}
          deleteTodoProps={deleteTodoProps}
          setUpdate={setUpdate}
        />
      ))}
    </ul>
  );
}
export default TodosList;
