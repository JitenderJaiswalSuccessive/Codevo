import React, { Component } from 'react';
import ToDo from './ToDo';

//Index as Antipattern
class ToDoList extends Component {
    constructor() {
      super();
      this.state = {
        todoCounter: 1,
        list: [
          {
            id: 1,
            createdAt: new Date(),
          },
        ],
      };
    }
  
    sortByEarliest = () => {
      const { list } = this.state;
      const sortedList = list.sort((a, b) => {
        return a.createdAt - b.createdAt;
      });
      this.setState({
        list: [...sortedList],
      });
    }
  
    sortByLatest = () => {
     const { list } = this.state;
      const sortedList = list.sort((a, b) => {
        return b.createdAt - a.createdAt;
      });
      this.setState({
        list: [...sortedList],
      });
    }
  
    addToEnd = () => {
     const { list, todoCounter } = this.state;
      const newList = [
         ...list,
        {id: todoCounter + 1, createdAt: new Date()},
      ];
      this.setState({
        list: newList,
        todoCounter: todoCounter + 1,
      });
    }
  
    addToStart = () => {
      const { list, todoCounter } = this.state;
      const newList = [
        {id: todoCounter + 1, createdAt: new Date()},
        ...list,
      ];
      this.setState({
        list: newList,
        todoCounter: todoCounter + 1,
      });
    }
  
      
    render() {
        const { list } = this.state;
        const todo = list.map((todo, index) => <ToDo key={index} index={index} {...todo} />);
      return (
        <div>
          <code>key=index</code>
          <br />
          <button onClick={this.addToStart}>Add New to Start</button>
          <button onClick={this.addToEnd}>Add New to End</button>
          <button onClick={this.sortByEarliest}>Sort by Earliest</button>
          <button onClick={this.sortByLatest}>Sort by Latest</button>
          <table>
            <thead>
              <td>Index</td>
              <td>ID</td>
              <td>Item</td>
              <td>Created at</td>
            </thead>
            <tbody> {todo}</tbody>
          </table>
        </div>
      );
    }
  }
  
 
export default ToDoList;