import React from 'react';
import TaskForm from './components/TaskForm';
import TasksList from './components/TasksList';

function App() {
  return (
    <>
      <hr />
      <h2>TODO</h2>
      <TaskForm />
      <TasksList />
      <hr />
    </>
  );
}

export default App;
