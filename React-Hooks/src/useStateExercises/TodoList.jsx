import React, { useState } from "react";

export const TodoList = () => {
  const [input, setInput] = useState("");
  const [task, setTask] = useState([]);

  const addTodo = () => {
    let updateTodo = {
      title: input,
    };
    let prevTask = [...task];
    prevTask.push(updateTodo);
    setTask(prevTask);
    localStorage.setItem("todolist",JSON.stringify(prevTask));
    setInput("");
  };
  return (
    <>
      <div className="todo-App">
        <input
          type="text"
          placeholder="Enter your task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br></br>
        <button onClick={addTodo}>Add Task</button>
        <br></br>
        <ul>
          {task.map((item, index) => (
            <li key={index}>{item.title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};
