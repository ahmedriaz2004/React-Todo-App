import "./index.css";
import React, { useState } from "react";
import Task from "./Task";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed: false,
    };
    setTodoList(task.taskName !== "" ? [...todoList, task] : todoList);
  };

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => task.id !== id);
    setTodoList(newTodoList);
  };

  const completeTask = (id) => {
    setTodoList(
      todoList.map((task) => {
        if (task.id === id) {
          return { ...task, completed: true };
        } else {
          return task;
        }
      })
    );
  };
  return (
    <div className="App">
      <img className="img" src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png"alt=""/>
      <div className="addTask">
        <input className="input" onChange={handleChange} />
        <button className="btn" onClick={addTask}>Add Task</button>
      </div>
      <div className="list"></div>
      {todoList.map((task) => {
        return (
          <Task 
          taskName={task.taskName}
           id={task.id}
           completed={task.completed}
            deleteTask={deleteTask}
            completeTask={completeTask} />
        );
      })}
    </div>
  );
}

export default App;
