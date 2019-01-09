import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

const todoData = [
  {
    task: "Organize Garage",
    id: 1,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 2,
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
    this.setState({
      todoData: [...this.state.todoData, { task: this.state.task }],
      task: ""
    });
  };

  render() {
    return (
      <div>
        <h2>My Todo List</h2>
        <TodoList todoTask={this.state.todoData} />
        <TodoForm
          addNewTodo={this.addNewTodo}
          handleChanges={this.handleChanges}
          task={this.state.task}
        />
      </div>
    );
  }
}

export default App;
