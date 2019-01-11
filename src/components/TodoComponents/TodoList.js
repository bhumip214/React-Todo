import React from "react";
import Todo from "./Todo";
import "./TodoList.css";
import _ from "lodash";
import moment from "moment";

function DailyTodos(props) {
  return (
    <div className="dailyTodos">
      <span className="dueDate">
        {moment(props.dueDate).format("MMM Do YY")}
      </span>
      <hr />
      {props.todoData.map(todo => {
        return <Todo todo={todo} key={todo.id} toggleTodo={props.toggleTodo} />;
      })}
    </div>
  );
}

function TodoList(props) {
  const grouped = _.groupBy(
    props.todoData.sort((a, b) => {
      if (new Date(a.dueDate) < new Date(b.dueDate)) {
        return -1;
      }
      if (new Date(a.dueDate) > new Date(b.dueDate)) {
        return 1;
      }
      // a must be equal to b
      return 0;
    }),
    "dueDate"
  );
  //console.log(grouped);

  const dailyTodos = [];
  _.forOwn(grouped, (value, key) => {
    dailyTodos.push(
      <DailyTodos
        dueDate={key}
        todoData={value}
        toggleTodo={props.toggleTodo}
      />
    );
  });

  return dailyTodos;
}

export default TodoList;
