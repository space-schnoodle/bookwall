import React, { Component } from 'react';
import List from './List.js';
import Title from './Title';

const tasks = ['Concentrate', 'Learn React', 'Work harder!'];

class Main extends Component {
  render() {
    return (
      <div>
        <Title title={'ToDos'} />
        <List tasks={['Sleep well', 'eat healthy', 'do karate']} />
        <List tasks={tasks} />
      </div>
    );
  }
}

export default Main;
