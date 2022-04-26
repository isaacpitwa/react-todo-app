import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import styles from './TodoItem.module.css';

function TodoItem(props) {
  const [editing, setEditing] = useState(false);

  const {
    todo, handleChangeProps, deleteTodoProps, setUpdate,
  } = props;
  const { completed, id, title } = todo;

  TodoItem.propTypes = {
    todo:
      PropTypes.objectOf(
        { id: PropTypes.string, title: PropTypes.string, completed: PropTypes.bool },
      ),
    handleChangeProps: PropTypes.func,
    deleteTodoProps: PropTypes.func,
    setUpdate: PropTypes.func,

  };

  TodoItem.defaultProps = {
    todo: { id: '', title: '', completed: false },
    handleChangeProps: () => {},
    deleteTodoProps: () => {},
    setUpdate: () => {},
  };

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === 'Enter') {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: 'italic',
    color: '#595959',
    opacity: 0.4,
    textDecoration: 'line-through',
  };

  const viewMode = {};
  const editMode = {};

  if (editing) {
    viewMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  useEffect(() => () => {
    console.log('Cleaning up...');
  }, []);

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => handleChangeProps(id)}
        />
        <button onClick={() => deleteTodoProps(id)} type="button">
          {' '}
          <FaTrash />
        </button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
}

export default TodoItem;
