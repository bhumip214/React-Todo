import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./App.css";

const todoData = [
  {
    task: "Study React",
    id: 1,
    completed: false
  },
  {
    task: "Organize Cabinet",
    id: 2,
    completed: false
  },
  {
    task: "Cook Dinner",
    id: 3,
    completed: false
  },
  {
    task: "Complete Todo App",
    id: 4,
    completed: false
  }
];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData: todoData,
      task: ""
    };
  }
  handleChanges = event => {
    this.setState({ task: event.target.value });
  };

  addNewTodo = event => {
    event.preventDefault();
    if (this.state.task === "") {
      return;
    }
    let newItem = {
      task: this.state.task,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoData: [...this.state.todoData, newItem],
      task: ""
    });
  };

  handleToggleTodo = id => {
    //set state
    //look through todo list and find the task that I clicked on
    //toggle the complete status for that task
    this.setState({
      todoData: this.state.todoData.map(todo => {
        if (todo.id !== id) {
          return todo;
        } else {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
      })
    });
  };

  render() {
    return (
      <div className="App">
        <TodoForm
          addNewTodo={this.addNewTodo}
          handleChanges={this.handleChanges}
          task={this.state.task}
          clearCompleted={this.clearCompleted}
        />
        <h2>My Todo List</h2>
        <TodoList
          todoData={this.state.todoData}
          toggleTodo={this.handleToggleTodo}
        />
      </div>
    );
  }
}

export default App;
