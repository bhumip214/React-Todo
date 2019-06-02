import React from "react";
import "./Todo.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function TodoForm(props) {
  return (
    <div className="todoBar">
      <input
        className="search-bar"
        value={props.searchInputValue}
        type="text"
        placeholder="Search..."
        onChange={props.handleSearch}
      />
      <input
        className="addTodo"
        value={props.task}
        type="text"
        name="task"
        placeholder="Add..."
        onChange={props.handleChanges}
      />
      <DatePicker
        selected={props.dueDate}
        onChange={props.handleDateChange}
        placeholderText="Select a date"
      />
      <button onClick={props.addNewTodo}>Add Todo</button>
      <button onClick={props.clearCompleted}>Clear Completed </button>
    </div>
  );
}

export default TodoForm;
