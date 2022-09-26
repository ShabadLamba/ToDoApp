import React, { useState } from 'react';
import './ToDo.css';

function ToDoCreateForm({ handleInputChange }) {
  return (
    <>
      <form onSubmit={handleInputChange}>
        <div className='field'>
          <label htmlFor='toDoItem'>Create a new todo item</label>
          <input
            className='inputBox'
            type='text'
            id='toDoItem'
            name='toDoItem'
            aria-label='create a new to do item'
            placeholder='Create a new to do item'></input>
        </div>
      </form>
    </>
  );
}

export default ToDoCreateForm;
