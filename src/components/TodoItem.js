import React from "react";

import { FaPen } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { IconButton } from "@material-ui/core";

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
          <IconButton onClick={props.handleEdit} className="pen-icon">
            <FaPen />
          </IconButton>
          <IconButton
            onClick={props.handleToggleCompleted}
            className="checkCircle-icon"
          >
            <FaCheckCircle />
          </IconButton>
          <IconButton onClick={props.handleDelete} className="trash-icon">
            <FaTrash />
          </IconButton>
        </div>
      </li>
    </div>
  );
}
