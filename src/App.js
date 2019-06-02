import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./App.css";

import SimpleStorage from "react-simple-storage";

// const todoData = [
//   {
//     task: "Shop Groceries",
//     id: 1,
//     completed: false,
//     dueDate: new Date().toJSON()
//   },
//   {
//     task: "Clean Kitchen",
//     id: 2,
//     completed: false,
//     dueDate: new Date("2019-01-12").toJSON()
//   },
//   {
//     task: "Cook Dinner ",
//     id: 3,
//     completed: false,
//     dueDate: new Date().toJSON()
//   },
//   {
//     task: "Organize Cabinet",
//     id: 4,
//     completed: false,
//     dueDate: new Date("2019-01-12").toJSON()
//   },
//   {
//     task: "Do Laundry",
//     id: 5,
//     completed: false,
//     dueDate: new Date("2019-01-12").toJSON()
//   }
// ];

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoData: [],
      task: "",
      searchInputValue: "",
      dueDate: null
    };
  }

  updateInput(key, value) {
    // update react state
    this.setState({ [key]: value });
  }

  handleChanges = event => {
    this.setState({ task: event.target.value });
  };

  addNewTodo = event => {
    event.preventDefault();
    if (this.state.task === "") {
      return;
    }

    if (!this.state.dueDate) {
      alert("Please enter a due date");
      return;
    }

    const dueDate = this.state.dueDate || new Date();

    let newItem = {
      task: this.state.task,
      id: Date.now(),
      completed: false,
      dueDate: dueDate.toJSON()
    };

    this.setState({
      todoData: [...this.state.todoData, newItem],
      task: "",
      dueDate: null
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
          return { ...todo, completed: !todo.completed };
        }
      })
    });
  };

  clearCompleted = event => {
    event.preventDefault();
    const removeTask = this.state.todoData.filter(item => {
      return item.completed === false;
    });
    this.setState({ todoData: removeTask });
  };

  handleSearch = event => {
    this.setState({
      searchInputValue: event.target.value
    });
  };

  handleDateChange = date => {
    this.setState({
      dueDate: date
    });
  };

  render() {
    let searchResult = this.state.todoData.filter(todo => {
      return todo.task
        .toLowerCase()
        .includes(this.state.searchInputValue.toLowerCase());
    });

    return (
      <div className="App">
        <SimpleStorage parent={this} blacklist={["dueDate"]} />

        <div className="header">
          <span className="task-icon">
            <i className="fas fa-list-alt" />
          </span>
          <h2>Todos</h2>
        </div>

        <TodoForm
          addNewTodo={this.addNewTodo}
          handleChanges={this.handleChanges}
          task={this.state.task}
          clearCompleted={this.clearCompleted}
          handleSearch={this.handleSearch}
          searchInputValue={this.state.searchInputValue}
          dueDate={this.state.dueDate}
          handleDateChange={this.handleDateChange}
        />

        <TodoList
          todoData={
            this.state.searchInputValue ? searchResult : this.state.todoData
          }
          toggleTodo={this.handleToggleTodo}
        />
      </div>
    );
  }
}

export default App;
