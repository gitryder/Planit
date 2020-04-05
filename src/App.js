import React, {Component} from 'react';
import Todos from "./Todos"
import AddTodo from "./AddTodo"

class App extends Component {
  state = {
    todos : [
      
    ]
  }

  addTodoItem = (todo) => {
    let todos = [...this.state.todos, todo]
    this.setState({
      todos
    })
  }

  deleteTodoItem = (id) => {
    let todos = this.state.todos.filter(todo => {
      return todo.id !== id
    })

    this.setState({
      todos
    })
  }

  render() {  
    return (
      <div className="main-container">
        <h1 className="header">Planit</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodoItem}/>
        <AddTodo addTodo={this.addTodoItem}/>
      </div>
    )
  }
}

export default App