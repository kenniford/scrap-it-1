import React, { useState, useContext } from 'react';
import { TaskContext } from '../context/ToDoContext';

function TaskForm() {
  const { onAdd } = useContext(TaskContext);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [taskTitleErr, setTaskTitleErr] = useState(false);

  const addTask = event => {
    event.preventDefault();
    // add conditional to check if tasktitle or taskdescription are not empty
    if (!taskTitle) {
      setTaskTitleErr(true);
    } else {
      onAdd(taskTitle, taskDescription);
      setTaskTitleErr(false);
      setTaskTitle('');
      setTaskDescription('');
    }
  };

  const clearList = e => {
    localStorage.clear();
  };

  return (
    <div className='flex flex-col items-center py-4 bg-slate-100 w-96'>
      <h1 className='text-xl font-bold mt-8 mb-4'>Kenny's To Do List</h1>
      <form className='flex flex-col items-center w-full max-w-md'>
        <div className='flex flex-col w-full mb-4'>
          <input
            type='text'
            value={taskTitle}
            onChange={event => setTaskTitle(event.target.value)}
            className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none bg-white'
            placeholder='Add a new task'
          />
          <textarea
            type='text'
            value={taskDescription}
            onChange={event => setTaskDescription(event.target.value)}
            className='w-full px-4 py-2 mt-2 border border-gray-300 rounded-md focus:outline-none h-28 bg-white'
            placeholder='Add a note'
          />
        </div>
        <div>
          <p className={`relative ${taskTitleErr ? 'text-red-600' : 'invisible'}`}>
            Please input a task name
          </p>
        </div>
        <div className='flex flex-col w-full'>
          <button
            onClick={addTask}
            className='px-4 py-2 mb-2 border border-slate-800 bg-blue-300 rounded-md'>
            Add Task
          </button>

          <button
            onClick={clearList}
            className='px-4 py-2 border border-slate-800 rounded-md text-gray-700 mb-4'>
            Clear list
          </button>
        </div>
      </form>
    </div>
  );
}

export default TaskForm;
