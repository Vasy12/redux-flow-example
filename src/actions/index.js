import ACTION_TYPE from './types';

// COUNTER ACTION CREATORS
export const counterIncrement = () => ({
  type: ACTION_TYPE.COUNTER_INCREMENT,
});

export const counterDecrement = () => ({
  type: ACTION_TYPE.COUNTER_DECREMENT,
});

export const counterSetStep = stepValue => ({
  type: ACTION_TYPE.COUNTER_SET_STEP,
  stepValue,
});
// TODO ACTION CREATORS
export const createTask = values => ({
  type: ACTION_TYPE.CREATE_TASK,
  values,
});

export const updateTask = (taskIndex, values) => ({
  type: ACTION_TYPE.UPDATE_TASK,
  taskIndex,
  values,
});

export const removeTask = taskIndex => ({
  type: ACTION_TYPE.REMOVE_TASK,
  taskIndex,
});
