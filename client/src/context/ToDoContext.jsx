import React, { useState, useEffect, createContext } from 'react';

export const TaskContext = createContext({
  tasks: [],
  onAdd: () => {},
  updateTaskDone: () => {},
  deleteTask: () => {},
  renameTask: () => {},
  renameTaskDesc: () => {},
});

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    try {
      const storedTasks = JSON.parse(localStorage.getItem('tasks'));
      if (Array.isArray(storedTasks)) {
        setTasks(storedTasks);
      } else {
        setTasks([]);
      }
    } catch (err) {
      console.log('error parsing from local storage', err);
    }
  }, []);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  // reusable
  const updateTask = (id, updates) => {
    setTasks(prev => {
      const newTasks = [...prev];
      const taskIndex = newTasks.findIndex(task => task.id === id);
      newTasks[taskIndex] = { ...newTasks[taskIndex], ...updates };
      return newTasks;
    });
  };

  const onAdd = (title, description) => {
    setTasks(prev => [
      { id: Date.now(), title, description, done: false },
      ...prev,
    ]);
  };

  const deleteTask = (idToDelete) => {
    setTasks(prev => {
      const updatedTasks = prev.filter(task => task.id !== idToDelete);
      if (updatedTasks.length === 0) {
        localStorage.removeItem('tasks');
      } else {
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
      }
      return updatedTasks;
    });
  };

  const updateTaskDone = (id, done) => {
    updateTask(id, { done });
  };

  const renameTask = (id, newTitle) => {
    updateTask(id, { title: newTitle });
  };

  const renameTaskDesc = (id, newDesc) => {
    updateTask(id, { description: newDesc });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        onAdd,
        updateTaskDone,
        deleteTask,
        renameTask,
        renameTaskDesc,
      }}>
      {children}
    </TaskContext.Provider>
  );
};
