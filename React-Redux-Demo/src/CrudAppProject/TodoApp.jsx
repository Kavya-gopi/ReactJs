import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { addTasksToServer, addTodoList } from "../Slicescrud/TodoSlice";
import {useDispatch} from "react-redux";

function TodoApp() {
  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');
  const dispatch=useDispatch()
  const addTask=(e)=>{
     e.preventDefault();
     console.log({title,description});
     dispatch(addTasksToServer({title,description}));
     setTitle('');
     setDescription('');
  }
  return (
    <>
    <section className="my-5">
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Task Title</Form.Label>
          <Form.Control type="text" placeholder="Enter Task Title" 
          value={title}
          onChange={(e)=>setTitle(e.target.value)}/>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Task Description</Form.Label>
          <Form.Control type="text" placeholder="Enter Task Description" 
          value={description}
          onChange={(e)=>setDescription(e.target.value)}/>
        </Form.Group>
        <div className="text-end">
        <Button variant="primary" type="submit" onClick={(e)=>addTask(e)}>
          Add
        </Button>

        </div>
        
      </Form>
      </section>
    </>
  );
}

export default TodoApp;
