import React, { useState, useEffect } from "react";
import uuid from "react-uuid";

import TodoList from "./components/TodoList";
import InputForm from "./components/TodoInputForm";
import "materialize-css/dist/css/materialize.min.css";

import "./styles.css";

// here the high top component level (container for all other components)to return ui for the app (input form and list of items)
export default function App() {
  // used useState hook to initialize variables
  // used uuid to initialize id unique for each item
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editItem, setEditItem] = useState(false);
  let id = uuid();

  // retrieve data from the local storage that
  useEffect(() => {
    const storageTodoList = JSON.parse(localStorage.getItem("react_todo_list"));
    if (storageTodoList) {
      setTodoList(storageTodoList);
    }
  }, []);
  //store todo items by useEffect to run every time the value property changes and pass todo List in dependencies
  useEffect(() => {
    localStorage.setItem("react_todo_list", JSON.stringify(todoList));
  }, [todoList]);

  // to save input value when preventing a browser to handle the submission
  const handleChange = (e) => {
    e.preventDefault();

    setInputText(e.target.value);
  };

  //function to create a new item and add it to list then make input value is empty and without edit value
  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: id,
      title: inputText,
      done: false,
    };
    const updatedItems = [...todoList, newItem];
    setTodoList(updatedItems);
    setInputText("");
    setEditItem(false);
  };

  //the function will make the item able to delete when clicking on icon through id
  // then change the list value through passing the rest items
  const handleDelete = (id) => {
    const filterTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(filterTodoList);
  };

  //the function will make the item able to Edit when clicking on icon through id
  // then change the list value through passing the rest items
  // return the item to input area for edit and with give permission to edit
  const handleEdit = (id) => {
    const filterTodoList = todoList.filter((item) => item.id !== id);
    const selectItem = todoList.find((item) => item.id === id);
    setTodoList(filterTodoList);
    setInputText(selectItem.title);
    setEditItem(true);
  };

  //the function will make the item able to complete when clicking on icon through id
  //without changing the number of items in list content
  const handleToggleCompleted = (id) => {
    setTodoList(
      todoList.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            done: !item.done,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="containers">
      <div className="row">
        <div className="">
          <h1 className=""> To-do Notes</h1>
          <InputForm
            inputText={inputText}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            editItem={editItem}
          />
          <TodoList
            todoList={todoList}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
            handleToggleCompleted={handleToggleCompleted}
          />
        </div>
      </div>
    </div>
  );
}
