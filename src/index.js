import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Components/Main';

/*
React way
const tasks = ['Concentrate', 'Learn React', 'Work harder!'];
const element = React.createElement(
  'ol',
  null,
  tasks.map((task, index) => React.createElement('li', { key: index }, task))
);
*/

// with JSX
/*
const tasks = ['Concentrate', 'Learn React', 'Work harder!'];
const element = (
  <div>
    <h1>To do!</h1>
    <ol>
      {tasks.map((task, index) => (
        <li key={index}> {task}</li>
      ))}
    </ol>
  </div>
);
*/

// with components (compositional model)

ReactDOM.render(<Main />, document.getElementById('root'));
