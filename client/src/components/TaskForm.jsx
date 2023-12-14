import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/ToDoContext';

function TaskForm() {
  const { onAdd } = useContext(TaskContext);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const addTask = event => {
    event.preventDefault();
    // add conditional to check if tasktitle or taskdescription are not empty
    onAdd(taskTitle, taskDescription);
    setTaskTitle('');
    setTaskDescription('');
  };

  const clearList = e => {
    localStorage.clear();
  };

  return (
    <div>
      <h1 className='flex justify-center mt-64'>To Do List</h1>
      <form>
        <div className='flex flex-col'>
          <input
            type='text'
            value={taskTitle}
            onChange={event => setTaskTitle(event.target.value)}
            className='border border-slate-800'
            placeholder='Enter task name here...'
          />
          <textarea
            type='text'
            value={taskDescription}
            onChange={event => setTaskDescription(event.target.value)}
            className='border border-slate-800 w-96'
            placeholder='Enter task description here...'
          />
        </div>
        <div className='flex flex-col'>
          <button
            onClick={addTask}
            className='px-4 border border-slate-800 bg-blue-300'>
            Add Task
          </button>
          <button onClick={clearList}>Clear list</button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
