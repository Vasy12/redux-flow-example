import React from 'react';

const TaskItem = ({ id, index, body, isDone, remove, update }) => (
  <article style={{ display: 'flex', alignItems: 'center' }}>
    <h3>
      ID#{id}: {body}
    </h3>
    <input
      data-task-index={index}
      type="checkbox"
      checked={isDone}
      onChange={update}
    />
    <button data-task-index={index} onClick={remove}>
      Del.
    </button>
  </article>
);

export default TaskItem;
