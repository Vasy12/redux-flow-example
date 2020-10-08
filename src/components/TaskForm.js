import React from 'react';
import { connect } from 'react-redux';
import { useFormik } from 'formik';
import { createTask } from '../actions';

export const TaskForm = ({ dispatch }) => {
  const formik = useFormik({
    initialValues: {
      isDone: false,
      body: '',
    },
    onSubmit: values => {
      dispatch(createTask(values));
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
      <input
        name="body"
        onChange={formik.handleChange}
        placeholder="task value"
      />
      <button type="submit">add task</button>
      <button type="reset">reset</button>
    </form>
  );
};

export default connect()(TaskForm);
