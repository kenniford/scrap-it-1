import React, { useState, useContext } from 'react';
import Task from './Task';
import { TaskContext } from '../context/ToDoContext';

function TaskList() {
  const { tasks, updateTaskDone, deleteTask, renameTask, renameTaskDesc } = useContext(TaskContext);
  const [filter, setFilter] = useState('all');

  const handleChangeFilter = event => {
    setFilter(event.target.value);
  };

  const filterTasks = () => {
    if (filter === 'all') {
      return tasks;
    } else if (filter === 'active') {
      return tasks.filter(task => !task.done);
    } else if (filter === 'completed') {
      return tasks.filter(task => task.done);
    }

    return tasks;
  };

  const filteredTasks = filterTasks();

  return (
    <div>
      <div>
        <select
          name='filter'
          value={filter}
          onChange={handleChangeFilter}
          className='border border-slate-800'>
          <option value={'all'}>Show All</option>
          <option value={'active'}>Show Active</option>
          <option value={'completed'}>Show Completed</option>
        </select>
      </div>
      <div>
        {filteredTasks.map((item, index) => (
          <Task
            key={item.id}
            {...item}
            onRename={newTitle => renameTask(index, newTitle)}
            onRenameDesc={newDesc => renameTaskDesc(index, newDesc)}
            onToggle={done => updateTaskDone(index, done)}
            onDelete={() => deleteTask(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
