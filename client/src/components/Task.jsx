import React, { useState } from 'react';

function Task({
  title,
  description,
  done,
  onToggle,
  onDelete,
  onRename,
  onRenameDesc,
}) {
  const [editMode, setEditMode] = useState(false);
  const [editModeDesc, setEditModeDesc] = useState(false);

  return (
    <div>
      <div className='flex'>
        <input
          type='checkbox'
          defaultChecked={done}
          onClick={() => onToggle(!done)}
        />
      </div>
      {!editMode && (
        <div onClick={setEditMode(prev => !prev)}>
          <h1>Title: {title}</h1>
        </div>
      )}
      {editMode && (
        <form>
          <input
            type='text'
            value={title}
            onChange={event => onRename(event.target.value)}></input>
        </form>
      )}
      {!editModeDesc && (
        <div onClick={setEditModeDesc(prev => !prev)}>
          <h1>Description: {description}</h1>
        </div>
      )}
      {editModeDesc && (
        <form>
          <input
            type='text'
            value={description}
            onChange={event => onRenameDesc(event.target.value)}></input>
        </form>
      )}
      {/* <h1>Description: {description}</h1> */}
      <button className='border border-slate-800' onClick={onDelete}>
        Delete
      </button>
    </div>
  );
}

export default Task;
