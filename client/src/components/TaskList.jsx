import React, { useContext } from 'react';
import Task from './Task';
import { TaskContext } from '../context/ToDoContext';

function TaskList() {
  const { tasks, updateTaskDone, deleteTask, renameTask, renameTaskDesc } = useContext(TaskContext);

  return (
    <div>
      {tasks.map((item, index) => (
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
  );
}

export default TaskList;
