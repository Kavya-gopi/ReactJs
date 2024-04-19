import { useEffect, useState } from "react";
import "./App.css";
import { MdDeleteOutline } from "react-icons/md";
import { BsCheck2Circle } from "react-icons/bs";

function App() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [task, setTask] = useState("");
  const [description, setDescription] = useState("");
  const [allTodos, setAllTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);

  const addTodo = () => {
    let updateTodos = {
      title: task,
      des: description,
    };
    let addTodos = [...allTodos];
    addTodos.push(updateTodos);
    setAllTodos(addTodos);
    localStorage.setItem("todolist", JSON.stringify(addTodos));
    setTask("");
    setDescription("");
  };
  const handleDeleteTodo = (index) => {
    console.log(index);
    let deletedItem = [...allTodos];
    deletedItem.splice(index, 1);
    localStorage.setItem("todolist", JSON.stringify(deletedItem));
    setAllTodos(deletedItem);
  };

  const handleComplete = (index) => {
    let now = new Date();
    let dd = now.getDate();
    let mm = now.getMonth() + 1;
    let yyyy = now.getFullYear();
    let h = now.getHours();
    let m = now.getMinutes();
    let s = now.getSeconds();
    let completedOn =
      dd + "-" + mm + "-" + yyyy + " at " + h + ":" + m + ":" + s;
    let filteredItem = {
      ...allTodos[index],
      completedOn: completedOn,
    };
    let updatedCompletedArr = [...completedTodos];
    updatedCompletedArr.push(filteredItem);
    setCompletedTodos(updatedCompletedArr);
    handleDeleteTodo(index);
    localStorage.setItem("completedTodos", JSON.stringify(updatedCompletedArr));
  };

  const handleCompleteDeleteTodo = (index) => {
    let deletedItem = [...completedTodos];
    deletedItem.splice(index, 1);
    localStorage.setItem("completedTodos", JSON.stringify(deletedItem));
    setCompletedTodos(deletedItem);
  };
  useEffect(() => {
    let todoListinStorage = JSON.parse(
      localStorage.getItem("todolist", allTodos)
    );
    let savedCompleted = JSON.parse(
      localStorage.getItem("completedTodos", completedTodos)
    );
    if (todoListinStorage) {
      setAllTodos(todoListinStorage);
    }
    if (savedCompleted) {
      setCompletedTodos(savedCompleted);
    }
  }, []);

  return (
    <>
      <h2>My Todos</h2>
      <div className="todo-wrapper">
        <div className="todo-input">
          <div className="todo-input-item">
            <div className="todo-input-field">
              <label>Title:</label>
              <input
                type="text"
                placeholder="What's the task title?"
                value={task}
                onChange={(e) => setTask(e.target.value)}
              ></input>
            </div>
            <div className="todo-input-field">
              <label>Description:</label>
              <input
                type="text"
                placeholder="What's the task Description?"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></input>
            </div>
            <div className="todo-input-field">
              <button className="primaryBtn" onClick={addTodo}>
                Add
              </button>
            </div>
          </div>
          <div className="button-todo">
            <button
              className={`secondary-btn ${isCompleted === false && "active"}`}
              onClick={() => setIsCompleted(false)}
            >
              Todo
            </button>
            <button
              className={`secondary-btn ${isCompleted === true && "active"}`}
              onClick={() => setIsCompleted(true)}
            >
              Completed
            </button>
          </div>

          {isCompleted === false &&
            allTodos.map((item, index) => {
              return (
                <div className="todo-list" key={index}>
                  <div className="todo-list-items">
                    <h3>{item.title}</h3>
                    <p>{item.des}</p>
                  </div>
                  <div className="icon-list">
                    <MdDeleteOutline
                      className="icon"
                      onClick={() => handleDeleteTodo(index)}
                    />
                    <BsCheck2Circle
                      className="check-icon"
                      onClick={() => handleComplete(index)}
                    />
                  </div>
                </div>
              );
            })}

          {isCompleted === true &&
            completedTodos.map((item, index) => {
              return (
                <div className="todo-list" key={index}>
                  <div className="todo-list-items">
                    <h3>{item.title}</h3>
                    <p>{item.des}</p>
                    <p>
                      <small>Completed on: {item.completedOn}</small>
                    </p>
                  </div>
                  <div className="icon-list">
                    <MdDeleteOutline
                      className="icon"
                      onClick={() => handleCompleteDeleteTodo(index)}
                    />
                    {/* <BsCheck2Circle
                      className="check-icon"
                      onClick={() => handleComplete(index)}
                    /> */}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
