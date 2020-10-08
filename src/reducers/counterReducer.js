const initialState = {
  value: 0,
  step: 1,
};

function counterReducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case 'INCREMENT': {
      const { value, step } = state;
      return {
        ...state,
        value: value + step,
      };
    }
    case 'DECREMENT': {
      const { value, step } = state;
      return {
        ...state,
        value: value - step,
      };
    }
    case 'SET_STEP': {
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
