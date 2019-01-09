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
      todoData: todoData
    };
  }

  render() {
    return (
      <div>
        <h2>My Todo List</h2>
        <TodoList todoTask={this.state.todoData} />
        <TodoForm />
      </div>
    );
  }
}

export default App;
