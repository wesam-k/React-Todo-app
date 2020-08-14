import React, { useState, useEffect } from "react";
import uuid from "react-uuid";

import TodoList from "./components/TodoList";
import InputForm from "./components/TodoInputForm";
import "materialize-css/dist/css/materialize.min.css";

import "./styles.css";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [editItem, setEditItem] = useState(false);
  let id = uuid();

  useEffect(() => {
    const storageTodoList = JSON.parse(localStorage.getItem("react_todo_list"));
    if (storageTodoList) {
      setTodoList(storageTodoList);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("react_todo_list", JSON.stringify(todoList));
  }, [todoList]);

  const handleChange = (e) => {
    e.preventDefault();

    setInputText(e.target.value);
  };

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
    id = uuid();
    setEditItem(false);
  };

  const handleDelete = (id) => {
    const filterTodoList = todoList.filter((item) => item.id !== id);
    setTodoList(filterTodoList);
  };

  const handleEdit = (id) => {
    const filterTodoList = todoList.filter((item) => item.id !== id);
    const selectItem = todoList.find((item) => item.id === id);
    setTodoList(filterTodoList);
    setInputText(selectItem.title);
    setEditItem(true);
  };

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
