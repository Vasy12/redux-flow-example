import React from 'react';
import { connect } from 'react-redux';

export const Counter = props => {
  const { value, step, increment, decrement, onStepChange } = props;

  return (
    <article>
      <h1>{value}</h1>
      <div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
      </div>
      <hr />
      <input type="number" value={step} onChange={onStepChange} />
    </article>
  );
};

function mapStateToProps({ counter }) {
  return counter;
}

function mapDispatchToProps(dispatch) {
  return {
    increment: () =>
      dispatch({
        type: 'INCREMENT',
      }),
    decrement: () =>
      dispatch({
        type: 'DECREMENT',
      }),
    onStepChange: ({ target: { value } }) =>
      dispatch({
        type: 'SET_STEP',
        stepValue: Number(value),
      }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
