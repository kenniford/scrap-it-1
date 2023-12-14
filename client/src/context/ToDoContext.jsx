import React, { useState, useEffect, createContext } from 'react';

//Create Context Instance w/ default params
export const TaskContext = createContext({
  tasks: [],
  onAdd: () => {},
  updateTaskDone: () => {},
  deleteTask: () => {},
  renameTask: () => {},
});

//Provider Component
export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    try {
      //grab corresponding value for tasks key and assign to variable storedTasks
      const storedTasks = JSON.parse(localStorage.getItem('tasks'));
      //if value is not null or empty, set tasks vasriable to storedTasks, else assign to an empty array
      //without else condition, we will get errors in console stating tasks cannot be null
      if (Array.isArray(storedTasks)) {
        setTasks(storedTasks);
      } else {
        setTasks([]);
      }
    } catch (err) {
      console.log('error parsing from local storage', err);
    }
  }, []);

  //handles changes to tasks. if there is a change to tasks state, set local storage to newly updated tasks
  useEffect(() => {
    //if there are no tasks to be stored, return out of function
    if (tasks.length === 0) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const onAdd = (title, description) => {
    try {
      setTasks(prev => {
        const newTask = {
          id: Date.now(),
          title: title,
          description: description,
          done: false,
        };
        return [...prev, newTask];
      });
    } catch (err) {
      console.log('error setting task', err);
    }
  };

  const updateTaskDone = (index, done) => {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[index].done = done;
      return newTasks;
    });
  };

  const deleteTask = indexToDelete => {
    setTasks(prev => {
      return prev.filter((taskObj, index) => index !== indexToDelete);
    });
  };

  const renameTask = (index, newTitle) => {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[index].title = newTitle;
      return [...prev];
    });
  };

  const renameTaskDesc = (index, newDesc) => {
    setTasks(prev => {
      const newTasks = [...prev];
      newTasks[index].description = newDesc;
      return [...prev];
    });
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
