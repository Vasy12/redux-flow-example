import ACTION_TYPE from './types';

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
