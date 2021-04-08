import React, { Component } from 'react';
import ToDos from './ToDos.js'
import AddForm from './AddForm.js'

class App extends Component {
  state = {
    todos:[
      {id:1, content:'milk'}
    ]
  }
  deleteTodo =(id)=>{
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    });
    this.setState({
      todos
    })
  }
  addTodo=(todo)=>{
    todo.id = Math.random();
    let todos = [...this.state.todos, todo];
    this.setState({
      todos
    })
  }
  render(){
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">ToDo's</h1>
        <ToDos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddForm addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
