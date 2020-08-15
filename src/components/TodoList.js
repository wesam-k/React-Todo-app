import React from "react";

import TodoItem from "./TodoItem";

import "../../src/styles.css";

// the component will return the list of items with the situation of each item
export default function TodoList(props) {
  return (
    <div>
      <ul>
        <h2>
          {" "}
          {props.todoList.length !== 0 ? "My To-do" : "To-do list is empty"}
        </h2>
        <div>
          {props.todoList.map((item) => (
            <TodoItem
              key={item.id}
              item={item.title}
              handleDelete={() => props.handleDelete(item.id)}
              handleEdit={() => props.handleEdit(item.id)}
              handleToggleCompleted={() => props.handleToggleCompleted(item.id)}
              completed={item.done}
            />
          ))}
        </div>
      </ul>
    </div>
  );
}
