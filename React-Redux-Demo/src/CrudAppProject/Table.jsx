import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import MyVerticallyCenteredModal from "./UpdateTask";
import { useDispatch, useSelector } from "react-redux";
import { removeTodoList, updateTodoList,setSelectedTask } from "../Slicescrud/TodoSlice";

function TableTodo() {
  const [modalShow, setModalShow] = useState(false);
  const { taskList} = useSelector((state) => state.task);
  const dispatch = useDispatch();
  const updateTask = (task) => {
    console.log("Updating....");
    setModalShow(true);
    dispatch(setSelectedTask(task));
    
    
  };
  
  const deleteTask = (task) => {
    console.log("Deleting.....");
    dispatch(removeTodoList(task))
  };

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr className="text-center">
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {taskList.map((task, index) => {
            return (
              <tr className="text-center" key={task.id}>
                <td>{index+1}</td>
                <td>{task.title}</td>
                <td>{task.description}</td>
                <td>
                  {" "}
                  <Button
                    variant="primary"
                    className="mx-3"
                    onClick={() => updateTask(task)}
                  >
                    <i className="bi bi-pencil-square"></i>
                  </Button>
                  <Button variant="primary" onClick={() => deleteTask(task)}>
                    <i className="bi bi-trash3-fill"></i>
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default TableTodo;
