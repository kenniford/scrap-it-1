import React, { useState } from 'react';

function Task({title, description, done, onToggle, onDelete, onRename,onRenameDesc}) {
  const [editMode, setEditMode] = useState(false);
  const [editModeDesc, setEditModeDesc] = useState(false);

  return (
    <div className="mb-4 w-auto">
      <div className='flex'>
        <input
          type='checkbox'
          defaultChecked={done}
          onClick={() => onToggle(!done)}
        />
      </div>
      {/* if edit mode is false, display title */}
      {!editMode && (
        <div onClick={setEditMode(prev => !prev)}>
          <h1>Title: {title}</h1>
        </div>
      )}
      {/* if edit mode is true, display title */}
      {editMode && (
        <form className='flex'>
          <h1 className="mr-2">Title: </h1>
          <input
            type='text'
            value={title}
            onChange={event => onRename(event.target.value)}
          />
        </form>
      )}
      {!editModeDesc && (
        <div onClick={setEditModeDesc(prev => !prev)}>
          <h1>Description: {description}</h1>
        </div>
      )}
      {editModeDesc && (
        <form className='flex'>
          <h1 className="mr-2">Description: </h1>
          <input
            type='text'
            value={description}
            onChange={event => onRenameDesc(event.target.value)}
          />
        </form>
      )}
      <button className='border border-slate-800' onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

export default Task;
