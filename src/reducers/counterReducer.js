import ACTION_TYPE from '../actions/types';

const initialState = {
  value: 0,
  step: 1,
};

function counterReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case ACTION_TYPE.COUNTER_INCREMENT: {
      const { value, step } = state;
      return {
        ...state,
        value: value + step,
      };
    }
    case ACTION_TYPE.COUNTER_DECREMENT: {
      const { value, step } = state;
      return {
        ...state,
        value: value - step,
      };
    }
    case ACTION_TYPE.COUNTER_SET_STEP: {
      const { stepValue } = action;
      return {
        ...state,
        step: stepValue,
      };
    }
    default:
      return state;
  }
}

export default counterReducer;
