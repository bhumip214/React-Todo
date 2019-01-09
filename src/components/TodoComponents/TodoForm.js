import React from "react";

function TodoForm(props) {
  return (
    <form>
      <input type="text" placeholder="...todo" />
      <button>Add Todo</button>
      <button>Clear Completed </button>
    </form>
  );
}

export default TodoForm;
