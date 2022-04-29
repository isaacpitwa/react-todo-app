/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import PropTypes from 'prop-types';

function InputTodo(props) {
  const {
    addTodoProps,
  } = props;
  const [inputText, setInputText] = useState({
    title: '',
  });

  InputTodo.propTypes = {
    addTodoProps: PropTypes.func,

  };

  InputTodo.defaultProps = {
    addTodoProps: () => {},
  };

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      addTodoProps(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      alert('Please write item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={inputText.title}
        name="title"
        onChange={onChange}
      />
      <IconContext.Provider
        value={{
          color: 'darkcyan',
          style: { fontSize: '20px', color: '#ff0000' },
          className: 'submit-iconn',
        }}
      >
        <button className="input-submit" type="button">
          {' '}
          <FaPlusCircle />
        </button>
      </IconContext.Provider>
    </form>
  );
}

export default InputTodo;
