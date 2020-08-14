import React from "react";

import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

import "../../src/styles.css";

// in this component will return todo item in a line with 3 active icons to make the tasks(edit,complete,delete)
// the props refer from TodoList.js by props there coming from App.js
export default function TodoItem(props) {
  // <li>: make control if the item check as completed or not
  return (
    <div>
      <li
        className="todo-item"
        style={{
          color: "black",
          textDecoration: props.completed ? "line-through" : null,
        }}
      >
        {props.item}
        <div className="todo-item_icon">
          <span onClick={props.handleEdit} className="pen-icon">
            <FaPen />
          </span>
          <span
            onClick={props.handleToggleCompleted}
            className="checkCircle-icon"
          >
            <FaCheckCircle />
          </span>
          <span onClick={props.handleDelete} className="trash-icon">
            <FaTrash />
          </span>
        </div>
      </li>
    </div>
  );
}
