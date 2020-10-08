import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialState = {
  value: 0,
  step: 1,
};

function reducer(state = initialState, action) {
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

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
