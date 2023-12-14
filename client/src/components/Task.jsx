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
    <div className={`mb-4 w-auto ${done ? 'line-through' : ''} w-96 flex items-center`}>
      <div>
        <input
          type='checkbox'
          defaultChecked={done}
          onClick={() => onToggle(!done)}
          className='h-4 w-4 flex'
        />
      </div>
      <div className=''>
        {/* if edit mode is false, display title */}
        {!editMode && (
          <div onClick={setEditMode(prev => !prev)}>
            <h1
              className={`${
                done ? 'text-gray-500 line-through' : 'text-black'
              } font-bold text-lg`}>
              {title}
            </h1>
          </div>
        )}
        {/* if edit mode is true, display input*/}
        {editMode && (
          <form className='flex my-1'>
            {/* <h1 className="mr-2">Title: </h1> */}
            <input
              type='text'
              value={title}
              onChange={event => onRename(event.target.value)}
              className='w-80 bg-slate-100 font-bold text-lg px-2 pt-2'
              placeholder='edit title'
            />
          </form>
        )}
        {!editModeDesc && (
          <div onClick={setEditModeDesc(prev => !prev)}>
            <h1
              className={`${
                done ? 'text-gray-500 line-through' : 'text-black'
              } text-sm`}>
              Description: {description}
            </h1>
          </div>
        )}
        {editModeDesc && (
          <form className='flex my-1'>
            {/* <h1 className="mr-2">Description: </h1> */}
            <textarea
              value={description}
              onChange={event => onRenameDesc(event.target.value)}
              className='w-80 h-auto bg-slate-100 p-2 resize-none text-sm'
              placeholder='Add note'
            />
          </form>
        )}
      </div>
      <div className='p-2'>
        <button
          className='border border-slate-800 p-2 bg-red-500 text-white rounded'
          onClick={onDelete}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default Task;
