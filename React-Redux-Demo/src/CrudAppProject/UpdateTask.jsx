import React, { useState,useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from "react-redux";
import { updateTodoList } from "../Slicescrud/TodoSlice";

function MyVerticallyCenteredModal(props) {
    const [title,setTitle]=useState('');
    const [description,setDescription]=useState('');
    const [id,setId]=useState(0);
    const {selectedTask}=useSelector((state)=>state.task);
    const dispatch=useDispatch();
    const updateTask=()=>{
        console.log("updating...")
        dispatch(updateTodoList({id,title,description}));
        props.onHide();
    }

    useEffect(()=>{
      if(Object.keys(selectedTask).length!==0){
         setTitle(selectedTask.title);
         setDescription(selectedTask.description);
         setId(selectedTask.id);
      }
  
    },[selectedTask])
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update Task
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={()=>updateTask()}>Update</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;